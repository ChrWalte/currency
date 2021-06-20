set app-name=easy-currency
set app-version=1.0.1
docker build -t chrwalte/%app-name%:%app-version% .
docker push chrwalte/%app-name%:%app-version%
kubectl apply -f %app-name%.kube.yml
