using UnityEngine;
using System.Collections;

public class EnemyAI01 : MonoBehaviour
{
    private Transform player;
    public float playerDistance;
    public float rotationDamping = 20;
    public float moveSpeed = 2.0f;
    private Vector3 adjust;

    public static bool isPlyaerAlive = true;
    // Use this for initialization
    void Start()
    {
        player = GameObject.Find("Monster001").transform;
    }

    // Update is called once per frame
    void Update()
    {
        playerDistance = Vector3.Distance(player.position, transform.position);

        if (isPlyaerAlive)
        {
            if (playerDistance < 15f)
            {
                lookAtPlayer();
            }
            if (playerDistance < 11f)
            {
                if (playerDistance > 4f)
                {
                    chase();
                }
                else if (playerDistance <= 7f)
                {
                    attack();
                }
            }
        }
    }
    void lookAtPlayer()
    {
        Quaternion rotation = Quaternion.LookRotation(player.position - transform.position);
        transform.rotation = Quaternion.Slerp(transform.rotation, rotation, Time.deltaTime * rotationDamping);
    }
    void chase()
    {
        transform.Translate(Vector3.forward * moveSpeed * Time.deltaTime);
    }

    void attack()
    {
        RaycastHit hit;
        if (Physics.Raycast(transform.position, transform.forward, out hit))
        {
            if (hit.collider.gameObject.tag == "Player")
            {
                StartCoroutine("delayAttack");
                //hit.collider.gameObject.GetComponent<EnemyScript>().health -= 1f;
            }
        }
    }

    IEnumerator delayAttack()
    {
        yield return new WaitForSeconds(1f);
    }
}
