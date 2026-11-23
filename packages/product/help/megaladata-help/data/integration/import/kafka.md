---
description: Importing data into Megaladata from the Kafka message broker. Setup wizard.
---
# ![ ](./../../images/icons/data-sources/kafka-import_disabled.svg) Import from Kafka Message Broker

Use the **Kafka** component from the **Import** group to import data from a Kafka cluster.

## Ports

### Input ports

* ![Connection](./../../images/icons/app/node/ports/inputs/link_inactive.svg)&nbsp;**Connection**: Use this port to input the Kafka cluster connection parameters.
* ![ ](./../../images/icons/app/node/ports/inputs-optional/variable_inactive.svg)&nbsp;[Control variables](./../../workflow/variables/control-variables.md) (optional): You can use this port to set the values of the setup wizard parameters through variables.

### Output ports

* ![ ](./../../images/icons/app/node/ports/inputs/table_inactive.svg)&nbsp;**Dataset**: After running the node, this port displays the table with the imported data.

## Setup wizard

The setup wizard starts with the **Import of Kafka queue** page, which provides the following fields:

* **Connection**: This field displays the current connection status (i.e., if the node has been connected and activated). It's not editable.
* **Topic**: The name of the topic that groups messages of the same theme to which the consumer is subscribed.
* **Group ID**: A unique string to identify the consumer group within which a single instance of a message is delivered (see [group.id](https://kafka.apache.org/documentation/#consumerconfigs_group.id)).
* **Client ID**: A consumer identifier intended for transmitting data to the Kafka cluster when executing requests (see [client.id](https://kafka.apache.org/documentation/#consumerconfigs_client.id)).
* **Offset type**: A parameter that allows you to select the position of a message within a partition of a topic:
    * **No offset specified**: Selected by default.
    * **From the beginning of partition queue**: Offset relative to the beginning of the partition queue.
    * **From the stored offset**:  Import will start from the offset saved in the partition.
    * **Absolute offset**: Absolute offset by the specified message number.
    * **Offset relative to end**: Offset relative to the end of the partition queue.

> **Note:** Offsets are stored in Kafka topics.

* **Message timeout (ms)**: The maximum time for a single message request to be executed.
* **Maximum number of messages**: the import will stop upon reaching the maximum number of messages.
* **Additional consumer configuration**: Here you can add more Kafka parameters in form of *name*–*value* pairs.

**See also:**
* [Official Kafka website](https://kafka.apache.org/documentation/)

**Read on:** [Importing Megaladata Files](mgd.md)