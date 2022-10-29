import fire, { auth, db, storage } from "../firebaseConfig/firebaseConfig";

export const setServiceAcceptOrReject = async (status, serviceID, serviceName) => {
    try {
        console.log(status,serviceID,serviceName)
        status = status == 'accept' ? 'Y' : 'R'
        await db.collection(serviceName).doc(serviceID).update({ Active: status });
        return true
    } catch (error) {
        console.log(error)
    }
}

export const GetImage = async (path) => {
    try {
        const storageRef = storage.ref();
        let starsRef = storageRef.child(path);
        return await starsRef.getDownloadURL()
    } catch (error) {
        return "ImageNotFound"
    }
}


export const getUserDataByID = async (id) => {
    try {
        let userData = false;
        const response = await db.collection('Users').doc(id).get();
        userData = { ...response.data(), ID: response.id }
        return userData
    } catch (err) {
        console.log(err);
    }
}

export const getServicesByHostID = async(userId) => {
    try {
        let hostServices = {};

        const allServices = await (await db.collection('Services').doc('services').get()).data();
        
        if(!allServices) return hostServices;
        
        for (const serviceName of allServices.services) {
            const currentServices = await db.collection(serviceName).where('VendorID','==', userId).get();
            
            if(!currentServices.empty){
                const serviceDocs = [];
                currentServices.docs.forEach( doc =>{
                    serviceDocs.push({ID : doc.id, ...doc.data()});
                })

                hostServices[serviceName] = serviceDocs;
            }
        }
        
        return hostServices;
    } catch (err) {
        console.log(err);
    }
}
