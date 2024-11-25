# Kubernetes Persistence and External Services

This folder contains examples for managing persistent storage and connecting to external services in Kubernetes.

## Persistent Volumes and Claims

### Files
1. **`storage-class.yaml`**:
   - Defines a StorageClass for dynamic volume provisioning.
2. **`dynamic-pvc.yaml`**:
   - A PersistentVolumeClaim dynamically bound to a volume using `fast-storage`.
3. **`static-pv.yaml`**:
   - Defines a static PersistentVolume.
4. **`static-pvc.yaml`**:
   - Claims a pre-provisioned static PersistentVolume.

### Apply PV and PVC Configurations
```bash
kubectl apply -f pv-pvc/storage-class.yaml
kubectl apply -f pv-pvc/dynamic-pvc.yaml
kubectl apply -f pv-pvc/static-pv.yaml
kubectl apply -f pv-pvc/static-pvc.yaml
```

## External Services

### Files
1. **`postgresql-service.yaml`**:
   - A Kubernetes Service pointing to an external PostgreSQL database.
2. **`mysql-service.yaml`**:
   - A Kubernetes Service pointing to an external MySQL database.

### Apply External Service Configurations
```bash
kubectl apply -f external-services/postgresql-service.yaml
kubectl apply -f external-services/mysql-service.yaml
```

## Learn More

Visit the [article](https://kelcode.co.uk/bobs-journey-to-persistence-keeping-your-data-alive/) for detailed explanations of these configurations.
