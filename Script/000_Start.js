﻿
// The below are the first lines in our start script. they fade the screen in



var BlackScreen : GameObject;
var FadeScreen : GameObject;

function Start () {
    yield WaitForSeconds(1);
    FadeScreen.GetComponent("Animator").enabled=true;
    BlackScreen.SetActive(false);
    yield WaitForSeconds(0.99);
    FadeScreen.GetComponent("Animator").enabled=false;
    FadeScreen.SetActive(false);
}
