# Lightning File Explorer Spoon

With the Lightning File Explorer, you can create and then view a hierarchy of your files associated with a record. The files are nested within a familiar tree structure which we are all used to.

## Install

Voici les étapes pour installer le package.

Pré-requis logiciel: git, sfdx


1. Récupérer les sources

`git clone https://github.com/kevanmoothien/FileExplorer.git`


2. Enregistrer l'org dans sfdx

`sfdx force:auth:web:login -a vyvia.dev3 -r https://test.salesforce.com/`


3. Déployer les sources et exécuter les tests

`sfdx force:mdapi:deploy -d pkg -w 19 -u vyvia.dev3 --testlevel RunSpecifiedTests -r qsydFileExplorerControllerTest.cls,TriggerHandler_Test,qsyd_ContentDocumentTriggerHandlerTest`


4. Ajouter le permission set "File Explorer Permission Set Spoon" aux utilisateurs

Setup Home > Users > { pour chaque User } > Permission Set Assignments > Edit Assignments > ajouter "File Explorer Permission Set Spoon"


5. Migrer les données existantes comme suit

qsyd_FE__FileExplorerFile__c -> FileExplorerFile__c

qsyd_FE__FileExplorerFolder__c -> FileExplorerFolder__c

qsyd_FE__FileExplorerFolderTemplate__c -> FileExplorerFolderTemplate__c


6. Supprimer le managed package "Lightning File Explorer"
Setup Home > Installed Packages > Uninstall 
