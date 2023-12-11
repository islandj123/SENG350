const Questions = {
  question: "Are you experiencing severe pain or discomfort in your chest?",
  yes: {
    result: "Seek emergency care immediately. Call 911.",
  },
  no: {
    question: "Are you having difficulty breathing?",
    yes: {
      result: "Seek emergency care immediately. Call 911.",
    },
    no: {
      question: "Are you experiencing a sudden severe headache or difficulty speaking?",
      yes: {
        result: "Seek emergency care immediately. Call 911.",
      },
      no: {
        question: "Are you having severe abdominal pain or signs of a stroke (facial drooping, arm weakness, speech difficulties)?",
        yes: {
          result: "Seek emergency care immediately. Call 911.",
        },
        no: {
          question: "Do you have a fever, cough, and difficulty breathing?",
          yes: {
            result: "Go to the hospital for COVID-19 evaluation.",
            link: "/ed-services",
          },
          no: {
            question: "Do you have a non-life-threatening injury or illness that requires immediate attention?",
            yes: {
              result: "Go to the hospital for urgent care.",
              link: "/ed-services",
            },
            no: {
              question: "Do you have symptoms that are not urgent but need attention?",
              yes: {
                result: "Book an appointment with an available ED.",
                link: "/ed-services",
              },
              no: {
                result: "Monitor your symptoms. If unsure, consult with a healthcare professional for advice.",
                link: "/ed-services",
              },
            },
          },
        },
      },
    },
  },
};

export default Questions;
