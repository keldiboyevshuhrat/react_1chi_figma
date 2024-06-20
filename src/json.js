let json1 = [

    {
        "id": 1,
        "son": 112,
        "nom1": "Add tags for solutions",
        "nom2": "Easier to search for solutions based on a specific stack.",
        "tugma": "Enhancement",
        "comment": 2,
    },
    {
        "id": 2,
        "son": 99,
        "nom1": "Add a dark theme option",
        "nom2": "It would help people with light sensitivities and who prefer dark mode.",
        "tugma": "Feature",
        "comment": 4,
    },
    {
        "id": 3,
        "son": 65,
        "nom1": "Q&A within the challenge hubs",
        "nom2": "Challenge-specific Q&A would make for easy reference",
        "tugma": "Feature",
        "comment": 1,
    },
    {
        "id": 4,
        "son": 51,
        "nom1": "Allow image/video upload to feedback",
        "nom2": "Images and screencasts can enhance comments on solutions.",
        "tugma": "Enhancement",
        "comment": 2,
    },
    {
        "id": 5,
        "son": 42,
        "nom1": "Ability to follow others",
        "nom2": "Stay updated on comments and solutions other people post.",
        "tugma": "Feature",
        "comment": 3,
    },
    {
        "id": 6,
        "son": 4,
        "nom1": "Preview images not loading",
        "nom2": "Challenge preview images are missing when you apply a filter.",
        "tugma": "bug",
        "comment": 0,
    },

    // 2-json 

    {
        "id": 7,
        "son": 112,
        "nom1": "Add tags for solutions",
        "nom2": "Easier to search for solutions based on a specific stack.",
        "tugma": "Enhancement",
        "comment": 2,
    },
    {
        "id": 8,
        "son": 99,
        "nom1": "Add a dark theme option",
        "nom2": "It would help people with light sensitivities and who prefer dark mode.",
        "tugma": "Feature",
        "comment": 4,
    },
    {
        "id": 9,
        "son": 65,
        "nom1": "Q&A within the challenge hubs",
        "nom2": "Challenge-specific Q&A would make for easy reference",
        "tugma": "Feature",
        "comment": 1,
    },
    {
        "id": 10,
        "son": 51,
        "nom1": "Allow image/video upload to feedback",
        "nom2": "Images and screencasts can enhance comments on solutions.",
        "tugma": "Enhancement",
        "comment": 2,
    },
    {
        "id": 11,
        "son": 42,
        "nom1": "Ability to follow others",
        "nom2": "Stay updated on comments and solutions other people post.",
        "tugma": "Feature",
        "comment": 3,
    },
    {
        "id": 12,
        "son": 4,
        "nom1": "Preview images not loading",
        "nom2": "Challenge preview images are missing when you apply a filter.",
        "tugma": "bug",
        "comment": 0,
    },


]
// console.log(json1);

// div manzil
let react_3 = document.querySelector("#react_3")

console.log(react_3);

function name1(api) {
    for (let index = 0; index < api.length; index++) {
        let div1 = document.createElement("div");
        div1.className = "react_3_div2"

        div1.innerHTML = `
      <div className="react_3_div2_div">
            <div className="react_3_div2_1">
              <i class="react_3_div2_1_icons fa-solid fa-angle-up"></i>
              <p>${api[index].son}</p>
            </div>
            <div className="react_3_div2_div_2">
              <h1>${api[index].nom1}</h1>
              <p>${api[index].nom2}</p>
              <div className="react_3_div2_div_2_div">${api[index].tugma}</div>
            </div>

          </div>
         
          <div className="react_3_div2_div2">
            <i class="react_3_div2_div2_icons fa-solid fa-comment"></i>
            <p id="p_id">${api[index].comment}</p>
          </div>
      
      `


        // react_3.appendChild(div1)





    }

} name1(json1)

