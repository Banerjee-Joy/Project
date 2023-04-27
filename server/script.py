import sys
import joblib
import numpy as np
args = sys.argv

scaler = joblib.load('scaler.joblib')
model = joblib.load('model.joblib')
data = np.array([])
for i in range(10):
    item = float(args[i+1])
    data = np.append(data,item)

data = scaler.transform([data])
data = np.delete(data,-1)
price = model.predict([data])
price_mean = 167.18321
price_std = 105.78400
price = int((price*price_std)+price_mean) 
print(price)
