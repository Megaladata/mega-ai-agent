# User Roles

The data analysis process includes two main stages:
- **Model development**: A non-trivial task requiring deep knowledge of business specific and analytical methodologies. The company usually has a number of skilled analysts for this work. 
- **Report review and analysis:** Reports are critical for many company employees, from top managers to field experts from various departments. They do not need to dive deep into the model development process, but must have access to he most relevant results.

In Megaladata, you can manage user access through assigning *four functional roles*:
- **Workflow design**: The user gains access to all analytical capabilities of the Megaladata platform: developing processing logics, creating [web services](../../integration/web-services/README.md), implementing and [sharing](../../processors/integration/README.md) custom components, connecting to [external sources](../../integration/connections/README.md), and more.
- **View reports**: The user gains access to the reports provided on Megaladata's [Reports](../../report/README.md) page, with the ability to change their view, group and filter data, select charts, and perform other similar manipulations. The user *does not see* the computation and processing logic.
- **Batch processing**: The user receives permissions to run packages with the BatchLauncher utility or the **Megaladata Integrator**, without accessing the Megaladata Studio graphic interface.
- **Administration**: The user receives access to the platform's [Administration](../README.md) section, where they can manage Megaladata Server configuration, other user accounts, and open user sessions.

> **Note:** Megaladata doesn't support creating new user roles.

Based on the assigned role, the user receives permissions to access specific platform sections (see the next article).

**Read on:** [Access Matrix](access-matrix.md).