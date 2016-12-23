# _Receipt_

#### _A website that stores and organizes screenshots, 12/22/16_

#### By _**Molly LeCompte**_

## Description

_This website allows users to upload, store, and organize screenshots according to people they involve & categories. Users may also use the Text Recognizer custom module to upload an image of text and extract the text- this module uses the Ocrad.js optical recognition technology. Users are only able to view the receipts they create. This site will eventually be live on Pantheon._

## Setup/Installation Requirements

* _Clone this repository_
* _Launch MAMP and set web server document root to main project folder_
* _Access phpMyAdmin by directing browser to http://localhost:8888/phpMyAdmin/_
* _Import database by navigating to 'Import' tab in phpMyAdmin and uploading the database zip file located in the project's /sites/db-backup folder (make sure the selected character set is utf-8)._
* _Once database (named 'receipt') is imported, navigate to 'Privileges' tab in phpMyAdmin and add a user, setting the username to 'receipt_admin' and password to 'receipt'._
* _Direct browser to http://localhost:8888_

_Both the username and password for the Drupal site maintenance account is 'cipher'. Use these credentials to make administrative changes to the site._

## Known Bugs

_A few issues with the layout, but no buggy functionality (outside the Ocrad.js script, which works inconsistently)._

## Support and contact details

_Reach me at mollyklecompte@gmail.com with any questions or issues with the site._

## Technologies Used

_PHP, Drupal, MYSQL, Javascript, Jquery. Zen subtheme. Text Recognizer uses Ocrad.js script built by Kevin Kwok: https://github.com/antimatter15/ocrad.js_


### License

*This software is protected under the MIT license*

Copyright (c) 2016 **_Molly LeCompte_**
