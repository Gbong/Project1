﻿
var hitpoints : int = 10; //amount of damage
var totarget : float; //how far it is to the target
var range : float = 5; // the maximum distance allowed

function Update () {

    if (Input.GetButtonDown("Attack")) {

        var hit : RaycastHit;
        if (Physics.Raycast (transform.position, transform.TransformDirection(Vector3.forward), hit)) {
            totarget = hit.distance;
            if (totarget < range) {

                hit.transform.SendMessage("DeductPoints", hitpoints, SendMessageOptions.DontRequireReceiver);
            }
        }
    }
}