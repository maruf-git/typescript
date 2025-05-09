"use strict";
{
    // spread operator
    // rest operator
    // destructuring
    const bros1 = ['maruf', "rifat", "shifat"];
    console.log(bros1);
    const bros2 = ['linkon', "shohag", "morsalin"];
    // bros1.push(bros2);
    bros1.push(...bros2);
    console.log(bros1);
    const mentors1 = {
        typescript: "mezba",
        redux: "mir",
        dbms: "mizan"
    };
    const mentors2 = {
        prisma: "firoz",
        next: "tanmoy",
        cloud: "nahid",
    };
    const mentorsList = Object.assign(Object.assign({}, mentors1), mentors2);
}
