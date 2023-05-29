const userRepositories = require('../repositories/userRepositories');
const cloudinary = require('cloudinary').v2;

cloudinary.config({ 
    cloud_name: 'doqt4lhc6', 
    api_key: '748742174275851', 
    api_secret: 'PBysSDfH-HQqoCnehYNh_fQa-7s' 
  });

module.exports = {

    async update(id, body, image){
        if (image == undefined) {
            return userRepositories.update(id, body);
        }else{
            const fileBase64 = image.buffer.toString("base64");
            const file = `data:${image.mimetype};base64,${fileBase64}`;
            try {
                const result = await cloudinary.uploader.upload(file, {
                    folder: "image"
                })
                body.photo = result.url
                console.log("body srv", body);
                return userRepositories.update(id, body);
            } catch (err) {
                return err.message
            }
        }
    },

    getUser(id){
        return userRepositories.getUser(id);
    },

    getAllUser(){
        return userRepositories.getAllUser();
    },

    destroy(id){
        return userRepositories.destroy(id);
    },

    findAllUser(condition){
        return userRepositories.findAllUser({group_id: condition});
    }
}