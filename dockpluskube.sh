docker build -t chrwalte/easy-currency-web:1.0.0 .
docker push chrwalte/easy-currency-web:1.0.0
kubectl apply -f easy-currency.kube.yml
