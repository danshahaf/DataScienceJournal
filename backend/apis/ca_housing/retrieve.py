## API LINK : https://www.airbnb.com/partner

import requests






# --------------------------- GET PROPERTY DETAIL, NEED PROPERTY ID ------------------------
url = "https://airbnb19.p.rapidapi.com/api/v1/getPropertyDetails"

querystring = {"propertyId":"<REQUIRED>","currency":"USD"}

headers = {
	"X-RapidAPI-Key": "b431783ae9mshd87c297ff2d430bp19f8cdjsn088f7db71223",
	"X-RapidAPI-Host": "airbnb19.p.rapidapi.com"
}

response = requests.request("GET", url, headers=headers, params=querystring)

print(response.text)