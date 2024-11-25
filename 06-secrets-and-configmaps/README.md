# Kubernetes Secrets and ConfigMaps

This folder contains examples demonstrating how to securely manage sensitive data and configurations in Kubernetes.

## Secrets

1. **`database-password-secret.yaml`**:
   - Stores a database password as a Kubernetes Secret
2. **`docker-registry-secret.yaml`**:
   - Stores credentials for pulling images from a private Docker registry
3. **`tls-secret.yaml`**:
   - Stores TLS certificate and private key for secure communication
4. **`pod-with-secrets.yaml`**:
   - Demonstrates how to use a Secret in a Pod for environment variables

### Apply Secrets
```bash
kubectl apply -f secrets/database-password-secret.yaml
kubectl apply -f secrets/docker-registry-secret.yaml
kubectl apply -f secrets/tls-secret.yaml
kubectl apply -f secrets/pod-with-secrets.yaml
```

## ConfigMaps

1. **`app-configmap.yaml`**:
   - Stores application configuration data
2. **`pod-with-configmap.yaml`**:
   - Demonstrates how to use a ConfigMap in a Pod

### Apply ConfigMaps
```bash
kubectl apply -f configmaps/app-configmap.yaml
kubectl apply -f configmaps/pod-with-configmap.yaml
```

## Learn More

Visit the [article](https://kelcode.co.uk/bobs-journey-into-secrets-and-config-maps/) for detailed explanations of these configurations.
