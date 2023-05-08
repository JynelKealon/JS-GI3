class Person {
    constructor(name, job, age) {
        this.name = name;
        this.job = job;
        this.age = age;
    }

    exercise() {
        console.log("Running is fun! - said no one ever");
    }

    fetchJob() {
        console.log(`${this.name} is a ${this.job}`);
    }
}
class Programmer extends Person {
    constructor(name, job, age, languages) {
        super(name, job, age);
        this.languages = languages;
        this.busy = true;
    }

    completeTask() {
        this.busy = false;
    }

    acceptNewTask() {
        this.busy = true;
    }

    offerNewTask() {
        if (this.busy === true){
            console.log(`${this.name} no new tasks currently.`);
        } else {
            console.log(`${this.name} would love a new task.`);
        }
    }

    learnLanguage(language) {
        this.languages.push(language);
    }

    listLanguages(){
        console.log(`${this.languages} are all the languages ${this.name} knows`);
    }
}

const jynel = new Person ("Jynel", "Coder", 23);

jynel.exercise();

jynel.fetchJob();

const jynel2 = new Programmer ("Jynel", "Coder", 23, ["html", "css", "javascript"]);

jynel2.completeTask();
jynel2.offerNewTask();
jynel2.acceptNewTask();
jynel2.offerNewTask();

jynel2.listLanguages();
jynel2.learnLanguage("react");
jynel2.listLanguages();