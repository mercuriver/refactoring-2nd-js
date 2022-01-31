class Score {
  constructor(candidate, medicalExam, scoringGuide) {
    this._candidate = candidate;
    this._medicalExam = medicalExam;
    this._scoringGuide = scoringGuide;
  }

  execute() {
    this._result = 0;
    this._healthLevel = 0;
    this._highMedicalRiskFlag = false;

    if (this._medicalExam.isSmoker) {
      this._healthLevel += 10;
      this._highMedicalRiskFlag = true;
    }
    let certificationGrade = "regular";
    if (
      this._scoringGuide.stateWithLowCertification(this._candidate.originState)
    ) {
      certificationGrade = "low";
      this._result -= 5;
    }
    this._result -= Math.max(this._healthLevel - 5, 0);

    return {
      result: this._result,
      certificationGrade,
      highMedicalRiskFlag: this._highMedicalRiskFlag,
    };
  }
}

const score = (candidate, medicalExam, scoringGuide) => {
  return new Score(candidate, medicalExam, scoringGuide).execute();
};

const scoringGuide = {
  stateWithLowCertification: (state) => state === "CA" || state === "ME",
};
console.log(score({ originState: "CA" }, { isSmoker: true }, scoringGuide));
console.log(score({ originState: "NY" }, { isSmoker: false }, scoringGuide));
