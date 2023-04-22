import weightLossImg from "../images/WeightLoss.jpg"
import muscleImg from "../images/MuscleGain.jpg"
import cutImg from "../images/Cutting.jpg"
export const FitnessGoals = () =>{
    return (
    <div classname=""> 
        <Create />
    </div>
    );
};

const Create = () => {
    return (
        <div class = "goalsContainer">
            <div class="row">
            <div class="fitnessContainer col-md-4">
                <div class="fitnessCard" style={{ color: "gray" }}>
                    <img class = "img-responsive img-resize" src = {weightLossImg} alt="Gsirl with a tape measure around her waist, indicating weight loss."/>
                </div>
                <h2>Fat Loss</h2>
                <h2>"Weight Loss"</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                    eiusmod
                </p>
            </div>
            <div class="fitnessContainer col-md-4">
                <div class="fitnessCard">
                    <img class = "img-responsive img-resize" src = {muscleImg} alt = "Muscular guy with his back turned, lifting dumbell weights."/>
                </div>
                <h2>Muscle Retention</h2>
                <h2>"Bulking"</h2>
                <p style={{ color: "red" }}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                    eiusmod
                </p>
            </div>
            <div class="fitnessContainer col-md-4">
                <div class="fitnessCard">
                    <img class = "img-responsive img-resize" src = {cutImg} alt = "Muscular, lean boxer weighing in."/>
                </div>
                <h2>Fat Loss + Muscle Retention</h2>
                <h2>"Cutting"</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                    eiusmod
                </p>
            </div>
        </div>
    </div>
    );
};