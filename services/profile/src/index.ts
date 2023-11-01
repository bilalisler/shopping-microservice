import app from './app'
import ProfileController from "./Controllers/ProfileController";
import dotenv from "dotenv";

dotenv.config()

const profile = new ProfileController();

app.route("/profile")
    .get(profile.show)
    .post(profile.create)
    .put(profile.update)
    .delete(profile.delete)

app.listen(process.env.APP_PORT, () => {
    console.log(`Server running at http://localhost:${process.env.APP_PORT}`);
})