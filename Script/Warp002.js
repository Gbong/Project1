var warptarget2 : Transform;

function Update () {

}

function OnTriggerEnter (col : Collider) {

    if (col.gameObject.tag == "warp002") {
        this.transform.position = warptarget2.position;
    }
}