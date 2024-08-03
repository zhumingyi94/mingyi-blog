**202408020147**
**Status: ** #flashcards
**Tags: ** [[Backend Development]]

<hr style="border: none; height: 2px; background-color: #39FF14; margin: 20px 0;">

# Java Spring

<hr style="border: none; height: 2px; background-color: #39FF14; margin: 20px 0;">

### Key note

### Exercise

>[!question]- What is Java Actuator
?
It just the tools that helps us understand about the system and provide several endpoints, you can check it in [List of enpoints](www.luv2code.com/actuator-endpoints)
<!--SR:!2024-08-05,3,250-->


>[!question]- How to expose all endpoints
?
![[Pasted image 20240731173142.png | center]]
<!--SR:!2024-08-05,3,250-->

>[!question]- How to customize Spring Security
?
![[Pasted image 20240802021241.png]]
<!--SR:!2024-08-05,3,250-->


 >[!question]- How to inject custom application properties
?
![[Pasted image 20240802021304.png]]
<!--SR:!2024-08-05,3,250-->

>[!question]- How to decide which log level to use
?
![[Pasted image 20240801051356.png | center]]
<!--SR:!2024-08-05,3,250-->


>[!question]- What you can change in Core Properties
?
Log level and log file path, log file name
<!--SR:!2024-08-05,3,250-->

>[!question]- What you can change in Web Properties
?
>```java
>// Change port
>server.port=7070
>// Context path of the application
>server.servlet.context-path=/my-silly-app
>// Session imeout
>server.servlet.session.timeout=15m
>```
<!--SR:!2024-08-05,3,250-->

>[!question]- What can you change in Actuator Properties
?
>```java
>management.endpoints.web.exposure.include=*
>// Endpoints to exclude by name or wildcard
>management.endpoints.web.exposure.exclude=beans, mapping
>// Base path for actuator endpoints
>management.endpoints.web.base-path=/actuator
>```
<!--SR:!2024-08-05,3,250-->

>[!question]- What can you change in Security Properties
?
>```java
>// Default user name
>spring.security.user.name=admin
>spring.security.user.password=topsecret
>```
<!--SR:!2024-08-05,3,250-->

>[!question]- What can you change in Data Properties
?
>```java
>// JDBC URL of the database
>spring.datasource.url=jdbc:mysql://localhost:3306/ecommerce
>// Login username of the database
>spring.datasource.username=scott
>// Login password of the database
>spring.datasource.password=tiger
>```
<!--SR:!2024-08-05,3,250-->

### References

