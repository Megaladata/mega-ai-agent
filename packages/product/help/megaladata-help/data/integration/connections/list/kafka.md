---
description: Integration of Megaladata with the Kafka message broker. Connection parameters.
---

# ![ ](./../../../images/icons/data-sources/kafka_default.svg) Connecting to Kafka

This guide explains the settings found in the wizard when connecting to a Kafka message broker.

## Connection parameters

* **Caption**:  A user-defined name for the connection.
* **Кafka cluster**: A comma-separated list of host and port pairs for the initial connection to the Kafka cluster (e.g., `host1:port1,host2:port2`).
* **Теst**: A button to test the connection settings.
* **Security protocol**: The protocol that secures access to your data. Choose one of the following:
    * **PLAINTEXT**: Grants access without authentication or encryption. Not recommended for production environments.
    * **SASL_PLAINTEXT**: Provides authentication using a username and password but does not encrypt data in transit.
    * **SSL**: Encrypts data in transit using an SSL certificate for authentication. 
    * **SASL_SSL**: Combines SASL authentication (username and password) with SSL encryption for secure, authenticated connections. *This is the recommended protocol for production environments!*
* **SASL mechanism**: If you use `SASL_PLAINTEXT` or `SASL_SSL`, you must also select a SASL (Simple Authentication and Security Layer) mechanism. This mechanism extends the verification capabilities of the chosen security protocol:
    * **PLAIN**: A simple authentication mechanism that uses a username and password.
    * **SCRAM-SHA-256**:  A more secure, challenge-response authentication mechanism that uses SHA-256 for hashing passwords. It protects against password sniffing and dictionary attacks.
    * **SCRAM-SHA-512**: Similar to `SCRAM-SHA-256`, but uses the stronger SHA-512 hashing algorithm.
* **Username**: The username for your Kafka user.
* **Password**: The password for your Kafka user. 
* **User certificate**: The path to the user certificate file. This certificate contains information about the user or service it is issued to (e.g., an IP address or domain name) and the issuing authority.
* **Private key**: The path to the server's private key file, which is associated with its certificate chain. 
* **Private key password**: A password to decrypt the private key, if one is set.
* **Additional configuration**: A customizable set of Kafka parameters in a name-value format.
* **Comment**: A field for any notes or comments about the connection.

**See also:** 
* [Official Kafka website](https://kafka.apache.org/documentation/).

**Read on:** [REST Service](rest-service.md)