
ani = prompt("Preferiez vous être en compagnie d'un Chat ou un Chien ?");

if (ani == 1){
    console.log();("Vous avez choisi le chat")
    pref1 = prompt("Avez vous déjà des chats ? Oui, Non ?")
    if pref1.lower() in ["Oui", "oui"]:
        heber = int(input("Vous sentez-vous capable d'héberger plus de chat ? oui, non ?"))
        if heber.lower() in ["Oui", "oui"]:
            console.log();console.log();("Très bien nous avons enregistrez vos informations.")
            chat = int(input("À quelle fréquence voudriez-vous héberger un ou des chat(s) ?"))
            console.log();console.log();("Très bien merci vos infos ont été enregistré vous serez recontacter ultérieurement par notre équipe")
            console.log();console.log();("Bonne journée à vous !")
        else:
            console.log("Très bien, c'est compréhensible");
            console.log("N'hésitez pas à nous recommander à votre entourage !");
    else:
        console.log('Très bien !');
        chat = int(input("À quelle fréquence voudriez-vous héberger un ou des chat(s) ?"))
            console.log("Très bien merci vos infos ont été enregistré vous serez\nrecontacter ultérieurement par notre équipe");
            console.log("Bonne journée à vous !");
}
    
        


if (ani == 2){
    console.log("Vous avez choisi le chien");
    pref2 = int(input("Avez vous déjà des chiens ? Oui, Non "))
    if pref2.lower() in ["Oui", "oui"]{
        hebe = int(input("Vous sentez-vous capable d'héberger plus de chien ? oui, non ?"))
        if hebe.lower() in ["Oui", "oui"]{
            chien = int(input("À quelle fréquence voudriez-vous héberger un ou des chien(s) ?"))
            console.log("Très bien merci vos infos ont été enregistré vous serez\nrecontacter ultérieurement par notre équipe");
            console.log("Bonne journée à vous !");
        }else{
            console.log("Très bien, c'est compréhensible");
            console.log("N'hésitez pas à nous recommander à votre entourage !");
        }
    }else{
        console.log('Très bien !');
        chat = prompt("À quelle fréquence voudriez-vous héberger un ou des chat(s) ?")
            console.log("Très bien merci vos infos ont été enregistré vous serez recontacter ultérieurement par notre équipe");
            console.log("Bonne journée à vous !");
    }  
}
    
