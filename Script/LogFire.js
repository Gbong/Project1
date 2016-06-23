var logfire : GameObject;

function Update () {

}

function OnTriggerEnter (col : Collider) {

    if (col.gameObject.tag == "fire001") {
        logfire.SetActive(true);
    }
}