# Kubernetes Secure Ingress Examples

This folder contains YAML configurations for setting up secure Ingress in Kubernetes.

## Files

### Ingress
1. **`basic-ingress.yaml`**:
   - A basic Ingress resource for HTTP traffic
2. **`tls-ingress.yaml`**:
   - An Ingress resource configured with TLS for HTTPS

### Services
1. **`app-service.yaml`**:
   - A Service routing traffic to the application

### Secrets
1. **`tls-secret.yaml`**:
   - A TLS Secret storing the certificate and private key for HTTPS

## Instructions

### Apply the Configurations
1. Deploy the Service:
   ```bash
   kubectl apply -f services/app-service.yaml
   ```

2. Add the TLS Secret:
   ```bash
   kubectl apply -f secrets/tls-secret.yaml
   ```

3. Deploy the Ingress:
   - For HTTP:
     ```bash
     kubectl apply -f ingress/basic-ingress.yaml
     ```
   - For HTTPS:
     ```bash
     kubectl apply -f ingress/tls-ingress.yaml
     ```

## Learn More

Visit the [article](https://kelcode.co.uk/exposing_your_applications_with_ingress/) for detailed explanations of these configurations.
