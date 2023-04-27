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

Update 27/04/2023: Sirius will now automatically detect if you need to use the loader or not if executing via https://sirius.menu/sirius. Thanks to [Razr](https://discord.com/users/541274447806726184)
:::

## Errors

<details>
  <summary>4XX Errors</summary>
  <table>
    <thead>
      <tr>
        <th>4XX Errors</th>
        <th>Description</th>
        <th>Reason</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>401</td>
        <td>Missing UserID</td>
        <td>Possible intrusion</td>
      </tr>
      <tr>
        <td>402</td>
        <td>Missing server key</td>
        <td>Possible intrusion</td>
      </tr>
      <tr>
        <td>403</td>
        <td>Passed server key did not verify (bad encoding)</td>
        <td>Possible intrusion</td>
      </tr>
      <tr>
        <td>405</td>
        <td>HWID not found in headers</td>
        <td>Unsupported executor</td>
      </tr>
      <tr>
        <td>406</td>
        <td>Invalid key mode</td>
        <td>Did they execute with a key?</td>
      </tr>
      <tr>
        <td>430</td>
        <td>Key on cooldown</td>
        <td>Unknown error</td>
      </tr>
      <tr>
        <td>440</td>
        <td>Unknown server error (catch all)</td>
        <td>Unknown error</td>
      </tr>
    </tbody>
  </table>
</details>

<details>
  <summary>5XX Errors</summary>
  <table>
    <thead>
      <tr>
        <th>5XX Errors</th>
        <th>Description</th>
        <th>Reason</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>501</td>
        <td>Key does not match HWID</td>
        <td>Reset HWID</td>
      </tr>
      <tr>
        <td>502</td>
        <td>HWID does not match Key</td>
        <td>Reset HWID</td>
      </tr>
      <tr>
        <td>503</td>
        <td>Internal Error - Key class not found</td>
        <td>Unknown error</td>
      </tr>
      <tr>
        <td>504</td>
        <td>IP is blacklisted</td>
        <td>Check blacklist logs, if no logs, possible global blacklist. Ping admin+</td>
      </tr>
      <tr>
        <td>505</td>
        <td>Key or HWID blacklisted</td>
        <td>Check blacklist logs, if no logs, possible global blacklist. Ping admin+</td>
      </tr>
      <tr>
        <td>506</td>
        <td>HWID is blacklisted</td>
        <td>Check blacklist logs, if no logs, possible global blacklist. Ping admin+</td>
      </tr>
      <tr>
        <td>507</td>
        <td>Account is not active</td>
        <td>Should not happen</td>
      </tr>
      <tr>
        <td>508</td>
        <td>Account ID not found</td>
        <td>Possible intrusion</td>
      </tr>
      <tr>
        <td>509</td>
        <td>Key not active (Disabled, Deleted, Blacklisted)</td>
        <td>May need to re-whitelist user</td>
      </tr>
      <tr>
        <td>510</td>
        <td>Key not verified</td>
        <td>Key does not match account</td>
      </tr>
      <tr>
        <td>511</td>
        <td>Key does not exist</td>
        <td>Re-whitelist the user</td>
      </tr>
      <tr>
        <td>512</td>
        <td>Key not assigned to account</td>
        <td>Sharing?</td>
      </tr>
      <tr>
        <td>513</td>
        <td>Key is not assigned to script</td>
        <td>Unknown error</td>
      </tr>
      <tr>
        <td>514</td>
        <td>Key has expired</td>
        <td>Generate a new one</td>
      </tr>
    </tbody>
  </table>
</details>

<details>
  <summary>7XX Errors</summary>
  <table>
    <thead>
      <tr>
        <th>7XX Errors</th>
        <th>Description</th>
        <th>Reason</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>707</td>
        <td>Synapse V2 disabled by owner</td>
        <td>No description provided (yet)</td>
      </tr>
      <tr>
        <td>708</td>
        <td>Krnl disabled by owner</td>
        <td>No description provided (yet)</td>
      </tr>
      <tr>
        <td>709</td>
        <td>Scriptware disabled by owner</td>
        <td>No description provided (yet)</td>
      </tr>
      <tr>
        <td>710</td>
        <td>OxygenU disabled by owner</td>
        <td>No description provided (yet)</td>
      </tr>
      <tr>
        <td>711</td>
        <td>Fluxus disabled by owner</td>
        <td>No description provided (yet)</td>
      </tr>
      <tr>
        <td>712</td>
        <td>Synapse V3 disabled by owner</td>
        <td>No description provided (yet)</td>
      </tr>
      <tr>
        <td>713</td>
        <td>Trial Keys disabled by owner</td>
        <td>No description provided (yet)</td>
      </tr>
      <tr>
        <td>721</td>
        <td>No token passed</td>
        <td>No description provided (yet)</td>
      </tr>
      <tr>
        <td>724</td>
        <td>Script is disabled by owner</td>
        <td>No description provided (yet)</td>
      </tr>
      <tr>
        <td>799</td>
        <td>Account ID Not Found</td>
        <td>No description provided (yet)</td>
      </tr>
    </tbody>
  </table>
</details>

<details>
  <summary>8XX Errors</summary>
  <table>
    <thead>
      <tr>
        <th>8XX Errors</th>
        <th>Description</th>
        <th>Reason</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>870</td>
        <td>Token validation failed</td>
        <td>No description provided (yet)</td>
      </tr>
    </tbody>
  </table>
</details>

<details>
  <summary>9XX Errors</summary>
  <table>
    <thead>
      <tr>
        <th>9XX Errors</th>
        <th>Description</th>
        <th>Reason</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>921</td>
        <td>Did not pass settings checks</td>
        <td>No description provided (yet)</td>
      </tr>
      <tr>
        <td>925</td>
        <td>Token validation failed</td>
        <td>No description provided (yet)</td>
      </tr>
    </tbody>
  </table>
</details>

:::info
You may get “atkn5” errors sent to you too. These are HTTP errors.

Example: “atkn5409”. The last 3 digits (409) in the error message is the HTTP error.

You can use <ins>[Mozilla's MDN website](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)</ins> to try and find a fix for it.
:::
