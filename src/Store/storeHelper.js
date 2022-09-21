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
