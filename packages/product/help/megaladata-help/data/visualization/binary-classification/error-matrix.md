# Error Matrix

**Error matrix** is a special type of the **cross table** with two dimensions - *actual* and *forecasted*.

<table>
<tr><th align="left" rowspan="2">Predicted</th><th align="left" colspan="2">Actually</th></tr>
<tr><th align="left" style="background:#eeeeee;">Positive</th><th align="left" style="background:#dfdfdf;">Negative</th><td style="background:#cceecc;">$$\displaystyle\mathsf{OCR=\frac{Σ\,TP + Σ\,TN}{Σ\,P + Σ\,N}}$$</td></tr>
 <tr><th style="background:#fafafa;">Positive</th><td style="background:#ccffcc;">True positive</td><td style="background:#eedddd;">False positive</td><td style="background:#ccffee;">$$\displaystyle\mathsf{PPV=\frac{Σ\,TP}{Σ\,TP + Σ\,FP}}$$</td></tr>
 <tr><th style="background:#fafafa;">Negative</th><td style="background:#ffdddd;">False negative</td><td style="background:#bbeebb;">True negative</td><td style="background:#aaddcc;">$$\displaystyle\mathsf{NPV=\frac{Σ\,TN}{Σ\,TN + Σ\,FN}}$$</td></tr>
<tr><td style="border:none;" rowspan="2"></td><td style="background:#eeffcc;">$$\displaystyle\mathsf{TPR=\frac{Σ\,TP}{Σ\,P}}$$</td><td style="background:#eeddbb;">$$\displaystyle\mathsf{FPR=\frac{Σ\,FP}{Σ\,N}}$$</td><td style="background:#ddffdd;">$$\displaystyle\mathsf{F_1\,score=2\cdot\frac{PPV\cdot NPV}{PPV + NPV}}$$</td></tr>
<tr><td style="background:#ffeecc;">$$\displaystyle\mathsf{FNR=\frac{Σ\,FN}{Σ\,P}}$$</td><td style="background:#ddeebb;">
$$\displaystyle\mathsf{TNR=\frac{Σ\,TN}{Σ\,P}}$$</td></tr>
</table>

> **Note**: Values of the used terms are available on [Terms](./terms.md) page.