from urllib import response
import requests
import pandas as pd
import json
from urllib.request import urlopen
import os
from bs4 import BeautifulSoup



# ----------------------- PART 1 : GENERAL PLAYER DATA
url = 'https://www.basketball-reference.com/leagues/NBA_2020_per_game.html'
page = requests.get(url)
soup = BeautifulSoup(page.content, 'html.parser')
soup.prettify()
table = soup.find_all(class_ = "full_table")
head = soup.find(class_ = "thead")
column_names_raw = [head.text for item in head][0]
clean = column_names_raw.replace("\n",",").split(",")[2:-1]

#queue to players before comiling to csv
players = []
for i in range(len(table)):
    player_data =[]
    for td in table[i].find_all("td"):
        player_data.append(td.text) 
    players.append(player_data)

ds = pd.DataFrame(players, columns = clean).set_index("Player")
ds.index = ds.index.str.replace("*", "")
ds.to_csv('players.csv', header = True)

print("CREATED : * players.csv *")

# ----------------------- PART 2 : GAME ACTION DATA
os.mkdir("games") #create a folder for all csv games
game = 22000001 #first game ID accessible
games = []

while True:
    try:
        gameurl = "00"+str(game)
        #get json
        url = "https://cdn.nba.com/static/json/liveData/playbyplay/playbyplay_"+gameurl+".json"
        response = urlopen(url)
        data_json = json.loads(response.read())
        #save json string to json file
        actions_json = data_json["game"]["actions"]
        gamedate = data_json["meta"]["time"][0:9]
        jsonString = json.dumps(actions_json)
        jsonfilename = "games/" + str(game)+".json"
        jsonFile = open(jsonfilename, "w")
        jsonFile.write(jsonString)
        jsonFile.close()
        #convert json to csv & store it
        with open(jsonfilename, encoding='utf-8') as inputfile:
            ds = pd.read_json(inputfile)
        csvfilename = "games/" + str(game)+".csv"
        ds.to_csv(csvfilename, encoding='utf-8', index=False)
        os.remove(jsonfilename)
        #store game info for easier access later
        games.append([gameurl, gamedate])
        game += 1
    except Exception as e: 
        # print(" ---- ERROR : " + str(e))
        break # DONE RETREIVING GAME INFORMATION

#store games and their dates in csv 
games = pd.DataFrame(games)
games.to_csv("games.csv",  encoding='utf-8', index=False)

# Now that I think about it, 
# having too many csv files is a bit annoying and inconvenient to deal with.
# What if Instead of modeling it like SQL relational database, 
# I could just add another dimoensional field to a main "actions.csv" file 
# where all csv files from all those 1080 games are put in together but are also labeled based on their game ID and date? 
# Let's go ahead and create a new script to do so at the end of which we could delete all the unnecessary csv files


games = pd.read_csv('games.csv')
games.columns = ["ID", "date"]
mainds = pd.DataFrame()
for i in range(len(games)):
    gameid = games["ID"][i]
    gamedate = games["date"][i]
    csvfile = "games/" + str(gameid) + ".csv"
    ds = pd.read_csv(csvfile)
    gameid_c = [gameid] * len(ds)
    gamedate_c = [gamedate] * len(ds)
    ds["game_id"] = gameid_c
    ds["game_date"] = gamedate_c
    mainds = pd.concat([mainds, ds])
    os.remove(csvfile)

os.remove("games.csv") #unneeded anymore now that all tables are joint
os.rmdir("games") #folder unneeded no more
mainds.to_csv("actions.csv")
print("CREATED : * actions.csv *")