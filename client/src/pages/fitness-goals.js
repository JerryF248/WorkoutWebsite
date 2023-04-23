import weightLossImg from "../images/weightloss.jpeg"
import muscleImg from "../images/muscle.jpeg"
import mentalImg from "../images/mental.png"
export const FitnessGoals = () =>{
    return (
    <div classname=""> 
        <Create />
    </div>
    );
};

const Create = () => {
    return (
        <div className="fitness-goals">
            <h1>Fitness Goals</h1>
            <h3><i>TIPS AND TRICKS FOR GOOD HEALTH</i></h3>
            <div className="row2">
                <div className="column2"><img className="fitnessimg" src={weightLossImg}></img>
                    <p className="fg-title"><b>Weight Loss</b></p>
                    <p className="fg-desc" style={{fontSize: 12}}>To lose weight quickly, focus on creating a calorie deficit by reducing your calorie intake and increasing your physical activity level. Start by making healthier food choices, such as eating more fruits and vegetables and reducing your intake of high-calorie, high-fat foods. Additionally, aim to exercise for at least 30 minutes a day, whether it's through brisk walking, jogging, cycling, or weightlifting. Remember to stay consistent and committed to your weight loss goals, and seek the guidance of a healthcare professional if you have any concerns.</p>
                </div>
                <div className="column2"><img className="fitnessimg" src={muscleImg}></img>
                    <p className="fg-title"><b>Muscle Gain</b></p>
                    <p className="fg-desc" style={{fontSize: 12}}>To gain muscle, you need to engage in a regular strength training program that focuses on progressively challenging your muscles with heavier weights and higher volume over time. It's essential to consume a diet that provides enough calories and protein to support muscle growth, including protein-rich foods like lean meats, fish, eggs, and beans. Ensure you get enough rest and recovery time between workouts, as this is when your muscles repair and grow. It's important to consult with a fitness professional or healthcare provider before starting a muscle-building program to ensure it is safe and appropriate for you.</p>
                </div>
                <div className="column2"><img className="fitnessimg" src={mentalImg}></img>
                    <p className="fg-title"><b>Mental Health</b></p>
                    <p className="fg-desc" style={{fontSize: 12}}>Improving mental health involves taking care of oneself both physically and emotionally. This includes engaging in self-care activities like regular exercise, healthy eating habits, and getting enough sleep. Stress-reducing techniques like meditation, mindfulness, or spending time in nature can also be helpful. It's important to maintain social connections with friends and loved ones, and to seek professional help if necessary, such as therapy or medication. Practicing self-compassion and asking for help when needed can also make a significant impact on mental well-being.</p>
                </div>
            </div>
        </div>
        
        
    //     <div class="row">
    //     <div class="fitnessContainer">
    //         <div class="fitnessCard" style={{ color: "gray" }}>
    //             <img class = "img-responsive img-resize" src = {weightLossImg} alt="Gsirl with a tape measure around her waist, indicating weight loss."/>
    //         </div>
    //         <h2>Fat Loss</h2>
    //         <h2>"Weight Loss"</h2>
    //         <p>
    //             Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
    //             eiusmod
    //         </p>
    //     </div>
    //     <div class="fitnessContainer">
    //         <div class="fitnessCard">
    //             <img class = "img-responsive img-resize" src = {muscleImg} alt = "Muscular guy with his back turned, lifting dumbell weights."/>
    //         </div>
    //         <h2>Muscle Retention</h2>
    //         <h2>"Bulking"</h2>
    //         <p style={{ color: "red" }}>
    //             Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
    //             eiusmod
    //         </p>
    //     </div>
    //     <div class="fitnessContainer">
    //         <div class="fitnessCard">
    //             <img class = "img-responsive img-resize" src = {cutImg} alt = "Muscular, lean boxer weighing in."/>
    //         </div>
    //         <h2>Fat Loss + Muscle Retention</h2>
    //         <h2>"Cutting"</h2>
    //         <p>
    //             Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
    //             eiusmod
    //         </p>
    //     </div>
    // </div>
    );
};