import fire, { auth, db, storage } from "../firebaseConfig/firebaseConfig";
import swal from "sweetalert2";

export const setServiceAcceptOrReject = async (status, serviceID, serviceName, featured) => {
    try {


        if (featured) {
            let doc = await db.collection(serviceName).where('serviceId', '==', serviceID).get()
            doc.forEach(element => {
                element.ref.delete();
            });
            return true
        }
        status = status == 'accept' ? 'Y' : 'R'
        await db.collection(serviceName).doc(serviceID).update({ Active: status });
        return true
    } catch (error) {
        console.log(error)
    }
}
export const getFeaturesService = async (serviceID) => {
    try {
        const response = await db.collection('FeaturedService').get();
        let resp = await db.collection('FeaturedService').where('serviceId', '==', serviceID).get();

        if (response.docs.map(doc => doc.data()).length == 3 && response.docs.map(doc => doc.data()).length > 0 ) {
            return 'Services Are Already Fulled'
        }
        else if (resp.docs.map(doc => doc.data()).length > 0) {
            return 'Services Are Already Included'
        }
        else {
            return true
        }
    } catch (error) {
        console.log(error)
    }
}
export const setFeaturedService = async (services) => {
    try {
        await db.collection('FeaturedService').doc().set(services)
        swal.fire({
            icon              : 'success',
            title             : 'Added Successfully',
            showConfirmButton : false,
            timer             : 1500
        });
    } catch (error) {
        console.log(error)

    }
}
export const getServiceByID = async (service, serviceId) => {
    try {
        let serviceData;

        const response = await db.collection(service).doc(serviceId).get();
        if (response && response.data()) serviceData = { ID: response.id, ...response.data() };

        return serviceData;
    } catch (err) {
        console.log(err);
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

export const getServicesByHostID = async (userId) => {
    try {
        let hostServices = {};

        const allServices = await (await db.collection('Services').doc('services').get()).data();

        if (!allServices) return hostServices;

        for (const serviceName of allServices.services) {
            const currentServices = await db.collection(serviceName).where('VendorID', '==', userId).get();

            if (!currentServices.empty) {
                const serviceDocs = [];
                currentServices.docs.forEach(doc => {
                    serviceDocs.push({ ID: doc.id, ...doc.data() });
                })

                hostServices[serviceName] = serviceDocs;
            }
        }

        return hostServices;
    } catch (err) {
        console.log(err);
    }
}
