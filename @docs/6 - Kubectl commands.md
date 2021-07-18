# Cheatsheet
https://kubernetes.io/docs/reference/kubectl/cheatsheet/

# Fetch Cluster Info
```
kubectl cluster-info

Kubernetes control plane is running at https://kubernetes.docker.internal:6443
CoreDNS is running at https://kubernetes.docker.internal:6443/api/v1/namespaces/kube-system/services/kube-dns:dns/proxy
```

# Feed a config file to Kubectl
```
kubectl apply -f <filename>
```

# Get Commands 
```
kubectl get pods
kubectl get services
kubectl get deployments
```

# Describe
```
kubectl describe pod <pod-name>
```

# Delete Pod
```
kubectl delete pods <name>
kubectl delete -f <config name>
```