## Spring Boot full stack website: [Landlorder](https://landlorder-app.herokuapp.com/)

![image](https://user-images.githubusercontent.com/56567343/135542815-734f0fca-866c-4f3b-b3bb-b4cf8054bfd8.png)

### Introduction
In this project I built a full stack web application using Spring boot, React.js, and MySQL with CRUD APIs and 
user authentication functionality using Spring Security and Auth0 library. The website name is Landlorder, it is a platform made
specifically to help property owners better manage their assets. Users can register, then login, and add their properties in the
dashboard. Users can also add tenants to their properties.

### Technologies I used
* Java
* JavaScript
* HTML/CSS
* Reactjs for the frontend
* Spring Boot for the backend
* MySQL for the database
* Spring Security, Auth0, and JSON Web Token for user authentication and authorization
* Ant Design for the user interfaces
* Create-react-app as frontend starting point
* Heroku for deployment

![image](https://user-images.githubusercontent.com/56567343/135544111-781fe809-6492-4e08-9008-dd06c31ea997.png)

### Deployment Location
Heroku: https://landlorder-app.herokuapp.com/

### Prerequisite (for local development)
* Maven
* Java 11 Jdk
* MySQL

### Basic Instruction
##### The following is for local development purpose
###### Clone/download the project folder in your local machine
###### Go to the project folder, open application.properties using editor of your choice
###### Enter your MySQL username and password in the spring.datasource.username and spring.datasource.password
###### Open a terminal in project folder, do the following
```bash
mvn clean install
```
###### After the project successfully built, do
```bash
java -jar target/landlorder_backend-0.0.1-SNAPSHOT.jar
```
###### After the project is successfully compiled, go to http://localhost:8080 on your browser, then you will see the home page

### Credits:
* background image src: Photo by eberhard grossgasteiger from Pexels
* rocket icon src: <div>Icons made by <a href="https://www.flaticon.com/authors/vectors-market" title="Vectors Market">Vectors Market</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
* manage icon src:
	<div>Icons made by <a href="https://www.flaticon.com/authors/monkik" title="monkik">monkik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
* house icon src:
	<div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
* landlord icon src:
	<div>Icons made by <a href="https://www.flaticon.com/authors/surang" title="surang">surang</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
* tenant icon src:
	<div>Icons made by <a href="https://www.flaticon.com/authors/eucalyp" title="Eucalyp">Eucalyp</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
