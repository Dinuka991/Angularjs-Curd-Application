
**Setup**

This application has been created to given basic knowledge
of angular events

_for linux_
 
 sudo apt-get install python-software-properties

curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -

$ sudo apt-get install python-software-properties

$ curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -

sudo apt-get install nodejs

sudo apt-get install nodejs-legacy

sudo npm install

sudo npm install nodejs

sudo npm install jquery -g

sudo npm i  popper 

sudo npm install http-server -g

sudo npm install -g json-server

_For windows users_ 


Download and install nodejs 
-https://nodejs.org/en/download/

Download Bootstrap  -http://getbootstrap.com/docs/4.0/getting-started/download/

npm install

npm install http-server 

---------------------------------------------------------------

angular-select


<div ng-app="myApp" ng-controller="myCtrl">

<select ng-model="selectedName" ng-options="x for x in names">
</select>

</div>

<script>
var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {
    $scope.names = ["Emil", "Tobias", "Linus"];
});
</script>























