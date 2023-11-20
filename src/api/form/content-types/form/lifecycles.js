module.exports = {

    async afterCreate(event) {
        const { result, params } = event;

        await strapi.service("api::form.email").send(
            "hsrlab2023",
            "phmtuan313@gmail.com",
            "Welcome",
            "Testing"
        );
    }
}