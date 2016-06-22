function OnTriggerEnter (info : Collider){
    Destroy(gameObject);
    CoinSystem.coinscollect +=1;
}