# MyelinMobile

## Description
MyelinMobile is a platform where patients (and their respective caregivers) can interact with their care team to mutually track medical updates and plan appropriate care programs. Patients/caregivers can manage their individual taskboard - adding either pre-built or custom tasks - and care teams can access each of their patient's task boards to manage them accordingly. Additionally, each task board item also includes a messaging board to allow communication between the two different parties.

## Installation

Note: This section will specify how to run the project, but it does not have any pre-loaded data, since we used Firebase. Follow the instructions in the “Additional Dependencies” section below to load data into the app.

In order to install the MyelinMobile project on your computer, follow the steps to clone a GitHub repository (as specified [here](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository-from-github/cloning-a-repository)). We will specify the steps for cloning using HTTPS, but the other methods (Github Desktop, SSH) will also work.
1. Click the `Code` button on the GitHub repository (linked [here](https://github.com/394-s21/MyelinApp)). This should open a drop down with several options, but will default to HTTPS.
2. Copy the link to your clipboard.
3. On your machine, navigate to the folder that you want to store the project in. If you are on Mac, you can do so through the Terminal - on Windows, use the command prompt.
4. Use the command `git clone [copied link]`, and press enter. This should now download the project into your working directory.

## Running the App
Now that you have downloaded the project, you will need to run several commands in order to get the correct packages and dependencies installed. You can continue to do this through the terminal/command prompt on your machine (making sure that your working directory is the project folder), or you can use an IDE like Virtual Studio Code to open the project folder and use their built-in terminal. Either way, the following commands are essential:
1. To install all project dependencies, run `expo install` (or `npm install`) in your terminal window.
2. Once completed, run `expo start` to run the app in development mode. 
3. At this point, you should be redirected to a local host page, wherein you can select how you would like to run the app: you should be able to run the app in an Android emulator\*, an iOS simulator\*, and/or a web browser (\* if applicable).
4. And finally, to terminate the app from running on your local machine, simply type `Ctrl-C` or `Cmd-D` (or equivalent) from the terminal. 

## Additional Dependencies (Firebase Setup)
The app uses Firebase for all of its information, but we removed all references to our database. In order to run the application with data, you will need to follow the steps to create a Firebase account and replicate the database we used. [This link](https://courses.cs.northwestern.edu/394/intro-react-native-firebase.php) is a great summary of what to do, and will walk you through any confusing steps.

1. Go to the [Firebase console](https://console.firebase.google.com/u/0/). Create an account if it is your first time.
2. Use the console to create a new project. You can choose to/not to set up Google Analytics, and you will be taken to a console for your project.
3. Since we previously set up Firebase with our project, we have provided sample data to facilitate a quicker setup. 
    * Select “Realtime Database” from the left menu on the project console. 
    * Under the “Data” tab, find the three dots button (they should be vertically aligned, and appear next to the + and - symbols). Click the button and then click “Import JSON”.
    * In the MyelinMobile project folder (on your computer), find the file at “utils/new-db-setup.json”. Select this folder and it should upload our sample data to your project.
4. Since we previously installed Firebase, you will not need to install any additional packages. Instead, in your project folder, run the command `firebase init`. This should prompt you to sign in with Firebase and will then ask you a series of questions:

    * Select `Use existing project` and then select the project you just created from the list Firebase shows
    * Select only __**Database**__ and __**Hosting**__
    * When it asks where the web code is, enter __**web-build**__
    * When it asks if this is a single-page app, say __**Yes**__
    * When it asks if you want Github integration, say __**No**__

Note: These are our suggestions, if you have other preferences feel free to specify them 
and follow the Firebase tutorials/steps for those.

5. At this point, if everything has been setup properly, you should be able to run the app according to the steps above. You can then run the command `expo build:web` to create a deployable web build of the app, and if that succeeds, run `firebase deploy`.

## Firebase Setup, Part 2

At this point, the app should build, but it does not have any data. Since we previously set up Firebase with our project, we have provided sample data to facilitate a quicker setup. We have another tutorial page [here](https://courses.cs.northwestern.edu/394/intro-react-native-firebase.php) that should help with these steps as well.

1. Navigate to the Firebase console again and	select “Realtime Database” from the left menu on the project console. 
    * Create a new database with the `test` settings (or `locked`, if you will be using private data).
    * Under the `Data` tab, find the three dots button (they should be vertically aligned, and appear next to the + and - symbols). Click the button and then click `Import JSON`.
    * In the MyelinMobile project folder (on your computer), find the file called `new-db-setup.json`. Select this folder and it should upload our sample data to your project. 
2. Now that you have uploaded the data, we can create an App for the project. 
   * In the top left corner of the Firebase console select `Project Overview`.
   * Click the + button to add app, and select the web app. Name it as you like.
   * Now, click on the Gear button next to `Project Overview` and select the option `Project Settings`.
   * Scroll down to the section titled `SDK Setup`, and you will notice that the configuration object (titled `firebaseConfig`) already exists in the file `firebase.js` in our project folder. Copy this object to the file, and you should now be able to run the app as specified above with all data loaded.


## Team Members
* Benjamin Nober
* Christopher Song
* Jacob Wat
* Linus Okoth
* Tiger Nie
* Zaddeen Benaissa
