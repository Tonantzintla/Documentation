---
title: Luaguard Errors
position: 1
---

Fixes to errors you may be sent

1. Sync all your operating system time(s).
2. Try sticking to 1 exploit.
3. Remove everything from auto execute.
4. Do not execute anything before running the script.

:::tip
If someone gets “You may only execute this script once”, that means that they are using both Sirius and Sirius loader.  
This is not supported as of right now and you can only run one at the same time.
:::

## Errors

<!-- 3 Headers/colums -->

| 4XX Errors | Description                                                 | Reason                       |
| ---------- | ----------------------------------------------------------- | ---------------------------- |
| 401        | Missing UserID.                                             | Possible intrusion.          |
| 402        | Missing server handshake key.                               | Possible intrusion.          |
| 403        | Server handshake key invalid.                               | Possible intrusion.          |
| 405        | HWID not found                                              | Unsupported executor.        |
| 406        | Account settings have prevented authentication.             | Did they execute with a key? |
| 430        | HWID, Key or IP is on cooldown due to many failed attempts. | Unknown error.               |
| 440        | Unknown error.                                              | Unknown error.               |

| 5XX Errors | Description                                | Reason                                                                    |
| ---------- | ------------------------------------------ | ------------------------------------------------------------------------- |
| 501        | HWID does not match key.                   | Reset HWID.                                                               |
| 502        | HWID does not match key.                   | Reset HWID.                                                               |
| 503        | Internal API problem.                      | Unknown error.                                                            |
| 504        | IP is blacklisted.                         | Check blacklist logs, if no logs, possible global blacklist. Ping admin+. |
| 505        | Key is blacklisted.                        | Check blacklist logs, if no logs, possible global blacklist. Ping admin+. |
| 506        | HWID is blacklisted.                       | Check blacklist logs, if no logs, possible global blacklist. Ping admin+. |
| 507        | Account not active/disabled.               | Should not happen.                                                        |
| 508        | Account not found.                         | Possible intrusion.                                                       |
| 509        | Key is not active .                        | May need to re-whitelist user.                                            |
| 510        | Generic key could not be verified          | Key does not match account.                                               |
| 511        | Key does not exist.                        | Re-whitelist the user.                                                    |
| 512        | Key does not belong to account.            | Sharing?                                                                  |
| 513        | Key not assigned to script being executed. | Unknown error.                                                            |
| 514        | Key expired.                               | Generate a new one.                                                       |

:::info
You may get “atkn5” errors sent to you too. These are HTTP errors.  
Example: “atkn5409”. The last 3 digits in the error message is the HTTP error.  
You can use <ins>[this site](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)</ins> to try and find a fix for it:.
:::
