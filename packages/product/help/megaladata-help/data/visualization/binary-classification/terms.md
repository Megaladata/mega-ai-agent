# Terms

Terms and abbreviations used in the description of [Binary classification assessment](./README.md) visualizer are listed here.

* **Сondition positive (P)**: the real number of positive cases.
* **Сondition negative (N)**: the real number of negative cases.
* **True positive (TP)**: the number of correctly classified positive cases.
* **True negative (TN)**: the number of correctly classified negative cases.
* **False positive (FP)**: the number of incorrectly classified positive cases. It is **type I** error.
* **False negative (FN)**: the number of incorrectly classified negative cases. It is type II error.
* **True positive rate (TPR)**: rate of correctly classified positive cases based on the total number of positive cases. *TPR* is called *sensitivity* of classification.  
   $$\displaystyle\mathsf{TPR=\frac{TP}{P}=\frac{TP}{TP+FN}=1−FNR}$$.
* **True negative rate (TNR)**: rate of correctly classified negative cases based on the total number of negative cases. *TNR* is called *Specificity* of classification.  
   $$\displaystyle\mathsf{TNR=\frac{TN}{N}=\frac{TN}{TN+FP}=1−FPR}$$.
* **Positive predictive value (PPV)**: rate of correctly classified positive cases based on the total number of the cases classified as the positive ones. *PPV* is called *Positive predictive value* of classification.  
   $$\displaystyle\mathsf{PPV=\frac{TP}{TP+FP}}$$.
* **Negative predictive value (NPV)**: rate of correctly classified negative cases based on the total number of the cases classified as the negative ones. *PPV* is called *Negative prediction value* of classification.  
   $$\displaystyle\mathsf{NPV=\frac{TN}{TN+FN}}$$.
* **False negative rate (FNR)**: rate of incorrectly classified negative cases based on the total number of positive cases. For *FNR* *1 - Sensitivity*.   term is frequently used
   $$\displaystyle\mathsf{FNR=\frac{FN}{P}=\frac{FN}{FN+TP}=1−TPR}$$.
* **False positive rate (FPR)**: rate of incorrectly classified positive cases based on the total number of negative cases. For *FPR* *1 - Specificity*.  term is frequently used
   $$\displaystyle\mathsf{FPR=\frac{FP}{N}=\frac{FP}{FP+TN}=1−TNR}$$.
* **Overall classification rate (OCR)**: rate of correctly classified cases based on the total number of cases. *OCR* is called *Overall classification rate*.  
   $$\displaystyle\mathsf{OCR=\frac{TP+TN}{P+N}=\frac{TP+TN}{TP+TN+FP+FN}}$$.
* **F<sub>1</sub> score** means the **average harmonic** value of *Accuracy* and *Sensitivity*. The metric is also called **F measure**.  
   $$\displaystyle\mathsf{F_1=2⋅\frac{PPV⋅TPR}{PPV+TPR}=\frac{2TP}{2TP+FP+FN}}$$.
* **Matthews correlation coefficient (MCC)** — [Matthews correlation coefficient](https://en.wikipedia.org/wiki/Matthews_correlation_coefficient).  
   $$\displaystyle\mathsf{MCC=\frac{TP⋅TN−FP⋅FN}{\sqrt{(TP+FP)(TP+FN)(TN+FP)(TN+FN)}}}$$.
* **Overall precision rate (OPR)** means the [arithmetical mean](https://en.wikipedia.org/wiki/Arithmetic_mean) of *Positive predictive value* and *Negative predictive value*. *OPR* means the *Overall Precision Rate*.  
   $$\displaystyle\mathsf{OPR=\frac{PPV+NPV}{2}}$$.