﻿
//This script is to be used on your loot coin or object.


var TextBoxOnCheck : int = 0; // Checks if TextBox is on the screen
var MessageBox : GameObject; // Defines the message box as an object
var TextBox : GameObject; // Defines the text box as an object

var QuestItemToClose : GameObject;
var QuestItemToShow : GameObject;

function OnMouseDown () {
    if (TextBoxOnCheck == 0) {
        TextBoxOnCheck = 1; //Sets the variable to turn the box off
        MessageBox.SetActive(true); //Re-enables the box
        TextBox.GetComponent.<Text>().text = "You found the loot."; //changes the message
        yield WaitForSeconds (3);
        gameObject.SetActive(false);
        MessageBox.SetActive(false);
        QuestItemToClose.SetActive(false);
        QuestItemToShow.SetActive(true);
    }

}
