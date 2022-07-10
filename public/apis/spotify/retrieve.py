import requests
from urllib.request import urlopen
from urllib import response
from requests_toolbelt.utils import dump
import json
import csv
import os
import pandas as pd

# -------------------- PREPARATIONS & AUTHORIZATION --------------------------
CLIENT_ID = 'f5fe4f535a2b4e1e9444efac624831ff'
CLIENT_SECRET = '6bfb5116c8c94f5795b7ca721cffa7f7'

AUTH_URL = 'https://accounts.spotify.com/api/token'
auth_response = requests.post(AUTH_URL, {
    'grant_type': 'client_credentials',
    'client_id': CLIENT_ID,
    'client_secret': CLIENT_SECRET,
})

auth_response_data = auth_response.json() # convert the response to JSON
access_token = auth_response_data['access_token'] # save the access token
headers = {
    'Authorization': 'Bearer {token}'.format(token=access_token)
}
BASE_URL = 'https://api.spotify.com/v1/' # base URL of all Spotify API endpoints


# ---------------------------- RETRIEVAL ----------------------
artists = pd.read_csv('artists.csv') #manually selected anf retrieved artists names and spotify uris (ids)
track_count, album_count = 0, 0
tracks = []
a = 0
for a in range(len(artists)): #for each artist
    r_0 = requests.get(BASE_URL + 'artists/' + artists['uri'].iloc[a], headers = headers)
    artist_more = r_0.json() # brings more info about currently looped artist from manual list
    r_1 = requests.get(BASE_URL + 'artists/' + artists['uri'].iloc[a] + '/albums', headers = headers) #access api
    for album in r_1.json()['items']: #for each album of that artist
        r_2 = requests.get(BASE_URL + 'albums/' + album['id'] + '/tracks', headers = headers) #access api for tracks
        for track in r_2.json()['items']: #for each track
            # add the following parameters to csv dataframe
            r_3 = requests.get(BASE_URL + 'tracks/' + track['id'], headers = headers)
            track_more = r_3.json() # brings more info about the currently looped song (track)
            tracks.append([track['track_number'], track['id'], track['name'], track['duration_ms'], track_more['popularity'], track['is_local'], track['explicit'], album['name'], album['id'], album['total_tracks'], album['release_date'], artists['artist'].iloc[a], artists['uri'].iloc[a], artist_more['popularity'], artist_more['genres'], artist_more['followers']['total']])
            track_count += 1
            print(" >  retreieved " + str(track_count) + ' TRACKS in ' + str(album_count + 1) + ' ALBUMS from ' + str(a + 1) + ' ARTISTS . ')
            # break # comment out for debugging purposes
        album_count += 1
        # break # comment out for debugging purposes
    a += 1
    # break # comment out for debugging purposes

print(" >>>>  retreieved " + str(track_count) + ' TRACKS in ' + str(album_count) + ' ALBUMS from ' + str(a) + ' ARTISTS .   <<<< ')
# ----------------------- CONVERT ALBUMS TO CSV -----------------------
trackds = pd.DataFrame(tracks)
trackds.columns = ['Number', 'ID', 'Name', 'Duration', 'Popularity', 'isLocal', 'isExplicit', 'Album Name', 'Album ID', 'Album Track Count', 'Album Release Date', 'Artist Name', 'Artist ID', 'Artist Popularity', 'Artist Genres', 'Artist Followers Count'] #manually designed by shahaf dan
trackds.to_csv('tracks.csv')







