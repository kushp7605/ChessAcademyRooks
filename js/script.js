/* =====================================================
   2. HEADER ACTIVE LINK
===================================================== */

const sections =
    document.querySelectorAll("section");

const navigationLinks =
    document.querySelectorAll(".nav-links a");


window.addEventListener("scroll", function () {

    let currentSection = "";


    sections.forEach(function (section) {

        const sectionTop =
            section.offsetTop - 100;

        const sectionHeight =
            section.offsetHeight;


        if (
            window.scrollY >= sectionTop &&
            window.scrollY <
            sectionTop + sectionHeight
        ) {

            currentSection =
                section.getAttribute("id");

        }

    });


    navigationLinks.forEach(function (link) {

        link.classList.remove("active");


        if (
            link.getAttribute("href") ===
            "#" + currentSection
        ) {

            link.classList.add("active");

        }

    });

});



/* =====================================================
   3. CONTACT FORM VALIDATION
===================================================== */

/* =====================================================
   3. CONTACT FORM VALIDATION
===================================================== */

const contactForm =
    document.getElementById("contactForm");


if (contactForm) {

    contactForm.addEventListener(
        "submit",
        function (event) {

            const email =
                document
                    .getElementById("email")
                    .value
                    .trim();


            const mobile =
                document
                    .getElementById("mobile")
                    .value
                    .trim();


            const message =
                document
                    .getElementById("message")
                    .value
                    .trim();


            /* -----------------------------------------
               CHECK EMPTY FIELDS
            ----------------------------------------- */

            if (
                email === "" ||
                mobile === "" ||
                message === ""
            ) {

                event.preventDefault();

                alert(
                    "Please fill in all fields."
                );

                return;

            }


            /* -----------------------------------------
               VALIDATE EMAIL
            ----------------------------------------- */

            if (
                !email.includes("@") ||
                !email.includes(".")
            ) {

                event.preventDefault();

                alert(
                    "Please enter a valid email address."
                );

                return;

            }


            /* -----------------------------------------
               VALIDATE MOBILE
            ----------------------------------------- */

            if (mobile.length < 10) {

                event.preventDefault();

                alert(
                    "Please enter a valid mobile number."
                );

                return;

            }

        }
    );

}


/* =====================================================
   4. MOBILE HAMBURGER MENU
===================================================== */

const menuToggle =
    document.getElementById("menuToggle");

const mobileNavLinks =
    document.getElementById("navLinks");


if (menuToggle && mobileNavLinks) {


    /* OPEN / CLOSE MENU */

    menuToggle.addEventListener(
        "click",
        function () {

            mobileNavLinks.classList.toggle(
                "active"
            );


            if (
                mobileNavLinks.classList.contains(
                    "active"
                )
            ) {

                menuToggle.innerHTML =
                    "&#10005;";


                menuToggle.setAttribute(
                    "aria-label",
                    "Close Navigation"
                );

            } else {

                menuToggle.innerHTML =
                    "&#9776;";


                menuToggle.setAttribute(
                    "aria-label",
                    "Open Navigation"
                );

            }

        }
    );



    /* CLOSE MENU AFTER CLICKING A LINK */

    mobileNavLinks
        .querySelectorAll("a")
        .forEach(function (link) {

            link.addEventListener(
                "click",
                function () {

                    mobileNavLinks.classList.remove(
                        "active"
                    );


                    menuToggle.innerHTML =
                        "&#9776;";


                    menuToggle.setAttribute(
                        "aria-label",
                        "Open Navigation"
                    );

                }
            );

        });

}



/* =====================================================
   5. CLOSE MENU WHEN SCREEN BECOMES DESKTOP SIZE
===================================================== */

window.addEventListener(
    "resize",
    function () {

        if (window.innerWidth > 600) {

            if (mobileNavLinks) {

                mobileNavLinks.classList.remove(
                    "active"
                );

            }


            if (menuToggle) {

                menuToggle.innerHTML =
                    "&#9776;";


                menuToggle.setAttribute(
                    "aria-label",
                    "Open Navigation"
                );

            }

        }

    }
);



/* =====================================================
   6. COURSE ENROLLMENT MODAL
===================================================== */


/*
    OPEN ENROLLMENT FORM

    Called by the Join Now buttons:

    openEnrollment("Basic Level")
    openEnrollment("Intermediate Level")
    openEnrollment("Advanced Level")
*/


function openEnrollment(level) {

    const modal =
        document.getElementById(
            "enrollmentModal"
        );


    const courseLevel =
        document.getElementById(
            "courseLevel"
        );


    /* Check modal */

    if (!modal) {

        console.error(
            "ERROR: enrollmentModal was not found."
        );

        return;

    }


    /* Check course field */

    if (!courseLevel) {

        console.error(
            "ERROR: courseLevel input was not found."
        );

        return;

    }


    /* Set selected course */

    courseLevel.value = level;


    /* Open modal */

    modal.classList.add("active");


    /* Prevent background scrolling */

    document.body.style.overflow =
        "hidden";


    /* Focus student name */

    const studentName =
        document.getElementById(
            "studentName"
        );


    if (studentName) {

        setTimeout(
            function () {

                studentName.focus();

            },
            100
        );

    }

}



/*
    CLOSE ENROLLMENT FORM
*/

function closeEnrollment() {

    const modal =
        document.getElementById(
            "enrollmentModal"
        );


    if (!modal) {

        return;

    }


    modal.classList.remove(
        "active"
    );


    document.body.style.overflow =
        "auto";

}



/* =====================================================
   7. ENROLLMENT FORM INITIALIZATION
===================================================== */

document.addEventListener(
    "DOMContentLoaded",
    function () {


        /* ---------------------------------------------
           DATE VALIDATION
        --------------------------------------------- */

        const dateInput =
            document.getElementById(
                "preferredDate"
            );


        if (dateInput) {

            const today =
                new Date();


            const year =
                today.getFullYear();


            const month =
                String(
                    today.getMonth() + 1
                ).padStart(
                    2,
                    "0"
                );


            const day =
                String(
                    today.getDate()
                ).padStart(
                    2,
                    "0"
                );


            dateInput.min =
                year +
                "-" +
                month +
                "-" +
                day;

        }



        /* ---------------------------------------------
           ENROLLMENT MODAL
        --------------------------------------------- */

        const modal =
            document.getElementById(
                "enrollmentModal"
            );


        if (modal) {


            /* -----------------------------------------
               CLOSE WHEN CLICKING OUTSIDE FORM
            ----------------------------------------- */

            modal.addEventListener(
                "click",
                function (event) {

                    if (
                        event.target === modal
                    ) {

                        closeEnrollment();

                    }

                }
            );

        }



        /* ---------------------------------------------
           CLOSE WITH ESCAPE KEY
        --------------------------------------------- */

        document.addEventListener(
            "keydown",
            function (event) {

                if (
                    event.key === "Escape"
                ) {

                    if (
                        modal &&
                        modal.classList.contains(
                            "active"
                        )
                    ) {

                        closeEnrollment();

                    }

                }

            }
        );

    }
);