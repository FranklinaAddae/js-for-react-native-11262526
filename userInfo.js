function createUserProfiles(names, modifiedNames) {
    return names.map((name, index) => ({
        id: index + 1,
        originalName: name,
        modifiedName: modifiedNames[index]
    }));
}

const originalNames = ["Franklina", "JavaScript", "Lina", "React", "Awesome"];
const modifiedNames = ["FRANKLINA", "javascript", "LINA", "react", "awesome"];

const userProfiles = createUserProfiles(originalNames, modifiedNames);
console.log(userProfiles);