/* ////////////////////////////////////////////////////////////////////
*
*  validPassword
*  v2.4 - 07 Jul 2023
*  Dev: Rogerio Saraceni
*
* //////////////////////////////////////////////////////////////////// */

/*! --------------------------------------------------------------------
* variables
* --------------------------------------------------------------------*/
const form = document.querySelector('[data-js="form"]');
const checkMsgCurrentNew = document.querySelector(".check-msg-current-new");
const checkMsgNewConfirm = document.querySelector(".check-msg-new-confirm");
const currentPass = document.querySelector('[data-js="currentPass"]');
const newPass = document.querySelector('[data-js="newPass"]');
const newPassConfirm = document.querySelector('[data-js="newPassConfirm"]');
const lowerCase = document.querySelector('[data-valid="lowerCase"]');
const upperCase = document.querySelector('[data-valid="upperCase"]');
const number = document.querySelector('[data-valid="number"]');
const length = document.querySelector('[data-valid="length"]');
const submitButton = document.querySelector('[data-button="submit"]');

let passwordStrength = document.querySelector(
    '[data-progress="pass-strength"]'
);

/*! --------------------------------------------------------------------
* captura de digitacao
* --------------------------------------------------------------------*/
if (newPass) {
    newPass.onkeyup = () => {
        /*! --------------------------------------------------------------------
        * regras para forÃ§a da senha
        * --------------------------------------------------------------------*/
        let strength = 0;

        const validations = [
            { regex: /[a-z]/g, element: lowerCase },
            { regex: /[A-Z]/g, element: upperCase },
            { regex: /[0-9]/g, element: number },
            { regex: /.{8,}/g, element: length },
        ];

        validations.forEach((validation) => {
            if (newPass.value.match(validation.regex)) {
                strength += 1;
                validation.element.classList.remove("invalid");
                validation.element.classList.add("valid");
            } else {
                validation.element.classList.remove("valid");
                validation.element.classList.add("invalid");
            }
        });

        /*! --------------------------------------------------------------------
        * barra de progresso
        * --------------------------------------------------------------------*/
        const strengthActions = [
            { class: "", width: "0%" },
            { class: "bg-success", width: "25%" },
            { class: "bg-success", width: "50%" },
            { class: "bg-success", width: "75%" },
            { class: "bg-success", width: "100%" },
        ];
        const action = strengthActions[strength] || strengthActions[0];
        const { class: strengthClass, width } = action;
        passwordStrength.classList.toggle(
            "bg-success",
            strengthClass === "bg-success"
        );
        passwordStrength.style.width = width;

        /*! --------------------------------------------------------------------
        * VerificaÃ§Ã£o final da forÃ§a da senha p/ submeter form
        * --------------------------------------------------------------------*/
        strength === 4
            ? (submitButton.disabled = false)
            : (submitButton.disabled = true);
    };
}

/*! --------------------------------------------------------------------
* Bloqueia espaÃ§o nos campos de senha / Bloqueia copiar e colar
* --------------------------------------------------------------------*/
const noSpace = (e) => {
    if (e.key === " ") {
        e.preventDefault();
        alert("Não é permitido espaços nos campos de senha!");
    }
};
const noPaste = (e) => {
    e.preventDefault();
    alert("Não é permitido copiar e colar nos campos de senha!");
};

document.querySelectorAll('input[type="password"]').forEach((item) => {
    item.addEventListener("keypress", (e) => noSpace(e));
    item.addEventListener("paste", (e) => noPaste(e));
});

/*! --------------------------------------------------------------------
* compara atual com nova / nova com comfirmada
* --------------------------------------------------------------------*/
form?.addEventListener("submit", (e) => {
    if (currentPass) {
        if (currentPass.value === newPass.value) {
            e.preventDefault();
            checkMsgCurrentNew.style.display = "block";
        } else {
            checkMsgCurrentNew.style.display = "none";
        }
    }

    if (newPass.value !== newPassConfirm.value) {
        e.preventDefault();
        checkMsgNewConfirm.style.display = "block";
    } else {
        checkMsgNewConfirm.style.display = "none";
    }
});
