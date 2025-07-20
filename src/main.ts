import { LoginSystem } from "./services/LoginSystem";
import readlineSync from "readline-sync";
const loginSystem = new LoginSystem();

const mainMenu = (): void => {
    let choice: string;

    do {
        console.log("");
        console.log("");
        console.log("=========================================");
        console.log("||          A I R L I N E              ||");
        console.log("||       R E S E R V A T I O N         ||");
        console.log("=========================================");
        console.log("|| 1. Register as Passenger             ||");
        console.log("|| 2. Register as Admin                 ||");
        console.log("|| 3. Login                             ||");
        console.log("|| 4. Exit                              ||");
        console.log("=========================================");
        console.log("");
        console.log("")
        choice = readlineSync.question("=====> Please enter your choice:");
        switch (choice) {
            case "1":
                const userName = readlineSync.question("-> Enter your username: ");
                const password = readlineSync.question("-> Enter your password: ", { hideEchoBack: true });
                loginSystem.registerPassenger(userName, password);
                break;
            case "2":
                const adminName = readlineSync.question("-> Enter your username: ");
                const adminPassword = readlineSync.question("-> Enter your password: ", { hideEchoBack: true });
                loginSystem.registerAdmin(adminName, adminPassword);
                break;
            case "3":
                const loginUserName = readlineSync.question("-> Enter your username: ");
                const loginPassword = readlineSync.question("-> Enter your password: ", { hideEchoBack: true });
                const user = loginSystem.loginUser(loginUserName, loginPassword);
                if (user) {
                    console.log("")
                    console.log("=========================================");
                    console.log(`|| User ID: ${user.getId()}                  ||`);
                    console.log(`|| Username: ${user.getUserName()}          ||`);
                    console.log(`|| Role: ${user.getRole()}                  ||`);
                    console.log(`|| Registered Date: ${user.getRegisteredDate()} ||`);
                    console.log("=========================================");
                    console.log("");
                }
                break;
            case "4":
                console.log("");
                console.log("=========================================");
                console.log("||          E X I T I N G               ||");
                console.log("=========================================");
                console.log("");
                break;
            default:
                console.log("");
                console.log("");
                console.log("=========================================");
                console.log("||             E R R O R               ||");
                console.log("=========================================");
                console.log("|| Invalid choice. Please try again.   ||");
                console.log("=========================================");
                console.log("");
                console.log("");


                break;
        }
    }while (choice != "4");
} 

mainMenu();