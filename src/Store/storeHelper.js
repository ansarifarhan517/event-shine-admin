import fire, { auth, db } from "../firebaseConfig/firebaseConfig";

export const setServiceAcceptOrReject = async (status, serviceID, serviceName) => {
    try {
        status = status == 'accept' ? 'Y' : 'R'
        await db.collection(serviceName).doc(serviceID).update({ Active: status });
        return true
    } catch (error) {
        console.log(error)
    }
}