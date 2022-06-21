import pandas as pd
import yahoo_fin as yf
from yahoo_fin.stock_info import get_data

ticker_list = ['AMZN', 'AAPL', 'TSLA', 'SNAP', 'SBUX', 'META', 'TWTR', 'NFLX', 'MSFT', 'GME', 'AMC', 'DIS', 'BAC', 'F', 'SPOT', 'V'] 
dataframes = []
for ticker in ticker_list:
    ds = pd.DataFrame(get_data(ticker, start_date = '01/01/2012', interval = '1d'))
    dataframes.append(ds)

ds = pd.concat(dataframes)
ds.to_csv('stocks.csv')