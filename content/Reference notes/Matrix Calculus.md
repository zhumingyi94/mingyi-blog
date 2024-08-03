**202408020124**
**Status:** #flashcards 
**Tags:** 

<hr style="border: none; height: 2px; background-color: #37FF1D; margin: 20px 0;">

# Matrix Calculus
<hr style="border: none; height: 2px; background-color: #37FF1D; margin: 20px 0;">

### Key note
##### Generalization of Jacobian
>[!error] We consider numerator layout, in many research paper, scientist use denumerator layout (It's just the transpose of numerator layout)
- The shape of Jacobian matrix are in the form below (Just remember this table!)
![[Pasted image 20240707173504.png | center|600]]


##### Derivatives of vector element-wise binary operator
- We can often reduce the Jacobian matrix into this form
$$
\mathbf{J}_{\mathbf{w}} = \frac{ \partial \mathbf{y} }{ \partial \mathbf{w} } = \begin{bmatrix}
\frac{ \partial}{ \partial w_{1}}(f_{1}(w_{1})\, \bigcirc \, g_{1}(x_{1}))  &  &  &  &   \Huge{0} \\
 &  \frac{ \partial }{ \partial w_{2} } (f_{2}(w_{2})\, \bigcirc \, g_{2}(x_{2}))  \\
\Huge{0}  &  &  &  &  \frac{ \partial}{ \partial w_{n} } (f_{n}(w_{n}) \, \bigcirc \, g_{n}(x_{n}))
\end{bmatrix}  
$$

</br>
</br>

$$
\mathbf{J}_{\mathbf{x}} = \frac{ \partial \mathbf{y} }{ \partial \mathbf{x} } = \begin{bmatrix}
\frac{ \partial}{ \partial x_{1}}(f_{1}(w_{1})\, \bigcirc \, g_{1}(x_{1}))  &  &  &  &   \Huge{0} \\
 &  \frac{ \partial }{ \partial x_{2} } (f_{2}(w_{2})\, \bigcirc \, g_{2}(x_{2}))  \\
\Huge{0}  &  &  &  &  \frac{ \partial}{ \partial x_{n} } (f_{n}(w_{n}) \, \bigcirc \, g_{n}(x_{n}))
\end{bmatrix}  
$$
- More succintly, we can write:
$$
\frac{ \partial \mathbf{y} }{ \partial \mathbf{x} } = diag(
\frac{ \partial}{ \partial x_{1}}(f_{1}(w_{1})\, \bigcirc \, g_{1}(x_{1})) \,,\
\frac{ \partial }{ \partial x_{2} } (f_{2}(w_{2})\, \bigcirc \, g_{2}(x_{2})), \, \dots ,\
\frac{ \partial}{ \partial x_{n} } (f_{n}(w_{n}) \, \bigcirc \, g_{n}(x_{n}))
)
$$

##### Derivatives involving scalar expression 
- Threre are 4 formulas that you should try to prove
	- $\frac{ \partial  }{ \partial \mathbf{x} } (\mathbf{x}+z) = diag(\vec{1}) = I$
	- $\frac{ \partial  }{ \partial z } (\mathbf{x} + z) = \vec{1}$
	- $\frac{ \partial  }{ \partial \mathbf{x} }(\mathbf{x}z)=Iz$
	- $\frac{ \partial }{ \partial z }(\mathbf{x}z) =\mathbf{x}$

##### Vector sum reduction 
Let $y=\text{sum}(\mathbf{f(x)}) = \sum_{i=1}^nf_{i}\mathbf{(x)}$. Notice we were careful here to leave the parameter as a vector $\mathbf{x}$ because each function $f_{i}$ could use all values in the vector, not just $x_{i}$. The sum is over the **results** of the function and not the parameter. The gradient (1 x $n$ Jacobian) of vector summation is
$$
\begin{flalign*}
\frac{ \partial y }{ \partial \mathbf{x} } &= \begin{bmatrix}
\frac{ \partial y }{ \partial x_{1} } , \frac{ \partial y }{ \partial x_{2}}, \dots, \frac{ \partial y }{ \partial x_{n} }  
\end{bmatrix} && \\ &= 
\begin{bmatrix}
\frac{ \partial  }{ \partial x_{1} }\sum_{i}f_{i}(\mathbf{x}) , \frac{ \partial  }{ \partial x_{2}}\sum_{i}f_{i}(\mathbf{x}), \dots, \frac{ \partial  }{ \partial x_{n} }\sum_{i}f_{i}(\mathbf{x})  
\end{bmatrix}&& \\ &=
\begin{bmatrix}
\sum_{i} \frac{ \partial f_{i}(\mathbf{x}) }{ \partial x_{1} } , \sum_{i} \frac{ \partial f_{i}(\mathbf{x}) }{ \partial x_{2} }, \, \dots, \sum_{i} \frac{ \partial f_{i}(\mathbf{x}) }{ \partial x_{n} }  
\end{bmatrix}
\end{flalign*}
$$

Because $\frac{ \partial }{ \partial x_{j} }x_{i} = 0$ for $j \neq i$, we can simplify to:
$$
\nabla y = \begin{bmatrix}
\frac{ \partial x_{1} }{ \partial x_{1} }, \frac{ \partial x_{2} }{ \partial x_{2} }, \, \dots, \frac{ \partial x_{n} }{ \partial x_{n} } \end{bmatrix} = \begin{bmatrix}
1, 1, \, \dots,1   
\end{bmatrix} = \vec{1}^T
$$

##### Chain rules
- **Single-variable rule:** $\frac{df}{dx} = \frac{df}{du} \frac{du}{dx}$
- **Single-variable total-derivative rule:** $\frac{ \partial f(u_{1}, \dots,u_{n}) }{ \partial x } = \frac{ \partial f }{ \partial \mathbf{u} } \frac{ \partial \mathbf{u} }{ \partial x }$
- **Vector rule:** $\frac{ \partial  }{ \partial \mathbf{x}}\mathbf{f(g(x)) = \frac{ \partial \mathbf{f} }{ \partial \mathbf{g} } \frac{ \partial \mathbf{g} }{ \partial \mathbf{x} }}$

### Exercise
>[!question]- Write *gradient* of a function of 2 variables
?
$\nabla f(x, y) = \begin{bmatrix}
\frac{ \partial f(x, y) }{ \partial x }, \frac{ \partial f(x, y) }{ \partial y }
\end{bmatrix}
$
<!--SR:!2024-08-05,3,250-->


$\nabla f(x, y) = ?$

>[!question]- Write the Jacobian
?
$
J_{x} = \frac{ \partial \mathbf{y} }{ \partial \mathbf{x} } = \begin{bmatrix}
\frac{ \partial f_{1}(x) }{ \partial x_{1} }  & \frac{ \partial f_{1}(x) }{ \partial x_{2} }   & \dots  & \frac{ \partial f_{1}(x) }{ \partial x_{n} } \\
\frac{ \partial f_{2}(x) }{ \partial x_{1} }  & \frac{ \partial f_{2}(x) }{ \partial x_{2} }   & \dots  & \frac{ \partial f_{2}(x) }{ \partial x_{n} } \\
  \dots   & \dots  & \dots & \dots
\\
\frac{ \partial f_{m}(x) }{ \partial x_{1} }  & \frac{ \partial f_{m}(x) }{ \partial x_{2} }  &  \dots  & \frac{ \partial f_{m}(x) }{ \partial x_{n} }
\end{bmatrix}
$
<!--SR:!2024-08-05,3,250-->

$J_{x} = ?$
>[!question]- The element-wise operations on vector $\mathbf{w}$ and $\mathbf{x}$ using $\bigcirc$
?
$\frac{ \partial (\mathbf{w+x}) }{ \partial \mathbf{w} } =I$
$\frac{ \partial (\mathbf{w-x}) }{ \partial \mathbf{w} } = I$
$\frac{ \partial (\mathbf{w \bigotimes x}) }{ \partial \mathbf{w} } = diag(\mathbf{x})$
$\frac{ \partial (\mathbf{w \oslash x}) }{ \partial \mathbf{w} } = diag\left( \dots\, \frac{1}{x_{i}} \dots\right)$
<!--SR:!2024-08-05,3,250-->

$\frac{ \partial (\mathbf{w+x}) }{ \partial \mathbf{w} } = ?$
$\frac{ \partial (\mathbf{w-x}) }{ \partial \mathbf{w} } = ?$
$\frac{ \partial (\mathbf{w \bigotimes x}) }{ \partial \mathbf{w} } = ?$
$\frac{ \partial (\mathbf{w \oslash x}) }{ \partial \mathbf{w} } = ?$

>[!question]- Write the scalar expansion
?
>$\frac{ \partial}{ \partial \mathbf{x} }(\mathbf{x} + z) = I$
>$\frac{ \partial}{ \partial z }(\mathbf{x} + z) = \vec{1}$
>$\frac{ \partial  }{ \partial \mathbf{x} }(\mathbf{x}z) = Iz$
>$\frac{ \partial  }{ \partial z}(\mathbf{x}z) =\mathbf{x}$
<!--SR:!2024-08-05,3,250-->

$\frac{ \partial}{ \partial \mathbf{x} }(\mathbf{x} + z) = ?$
$\frac{ \partial}{ \partial z }(\mathbf{x} + z) = ?$
$\frac{ \partial  }{ \partial \mathbf{x} }(\mathbf{x}z) = ?$
$\frac{ \partial  }{ \partial z}(\mathbf{x}z) = ?$

>[!question]- Write the chain rules
?
>**Single-variable rule: **$\frac{dy}{dx} = \frac{dy}{du} \frac{du}{dx}$
>**Single-variable total-derivative rule:** $\frac{ \partial f(u_{1}, u_{2}\dots,u_{n}) }{ \partial x } = \frac{ \partial y }{ \partial \mathbf{u} } \frac{ \partial \mathbf{u} }{ \partial x }$
>**Vector rule: ** $\frac{ \partial \mathbf{y} }{ \partial \mathbf{x} } = \frac{ \partial \mathbf{y} }{ \partial \mathbf{g} } \frac{ \partial \mathbf{g} }{ \partial \mathbf{x} }$
<!--SR:!2024-08-05,3,250-->

**Single-variable rule: **:
**Single-variable total-derivative rule:**
**Vector rule: **

>[!question]- Calculate the gradient of neuron activation $activation(\mathbf{x}) = max(0, \mathbf{w \cdot x} + b)$
?
> $\frac{ \partial activation(x) }{ \partial \mathbf{w} } =  \begin{equation}
\begin{cases}
\vec0^T \qquad \mathbf{w} \cdot \mathbf{x} + b \le 0 \\
\mathbf{x}^T \qquad \mathbf{w} \cdot \mathbf{x} + b > 0
\end{cases}
\end{equation}$
> $\frac{ \partial activation(\mathbf{x}) }{ \partial b } = \begin{equation}
\begin{cases}
0 \qquad \mathbf{w} \cdot \mathbf{x} + b \le 0 \\
1 \qquad \mathbf{w} \cdot \mathbf{x} + b > 0
\end{cases}
\end{equation}$
<!--SR:!2024-08-05,3,250-->

$\frac{ \partial activation(x) }{ \partial \mathbf{w} } = ?$
$\frac{ \partial activation(\mathbf{x}) }{ \partial b } = ?$


>[!question]- Calculate the gradient of the neural network loss function
?
> $C(\mathbf{w}, b, X, \mathbf{y}) =\frac{1}{N}\sum_{i=1}^N(y_{i} - max(0, \mathbf{w \cdot \mathbf{x}_{i}+b}))^2$
> $\frac{ \partial C }{ \partial \mathbf{w} } = \begin{equation}
\begin{cases}
\vec{0}^T & \mathbf{w \cdot x_{i} +b \le 0} \\ \\
\frac{2}{N}\sum_{i=1}^{N} (\mathbf{w}\cdot x_{i}+b-y_{i})\mathbf{x}_{i}^T  &  \mathbf{w} \cdot x_{i} + b > 0
\end{cases}
\end{equation}$
>$e_{i} = \mathbf{w} \cdot x_{i} +b -y_{i} \implies \frac{ \partial C }{ \partial \mathbf{w} } = \frac{2}{N}\sum_{i=1}^{N}e_{i}\mathbf{x}_{i}^T$
> $\frac{ \partial C }{ \partial b } = \begin{equation}
\begin{cases}
0 & \mathbf{w \cdot x_{i} +b \le 0} \\ \\
\frac{2}{N}\sum_{i=1}^{N}e_i&  \mathbf{w} \cdot x_{i} + b > 0
\end{cases}
\end{equation}$
<!--SR:!2024-08-05,3,250-->

$C(\mathbf{w}, b, X, \mathbf{y}) =\frac{1}{N}\sum_{i=1}^N(y_{i} - max(0, \mathbf{w \cdot \mathbf{x}_{i}+b}))^2= ?$


>[!question]- Calculate this $\frac{ \partial  }{ \partial x }(A \cdot ((A \cdot x + b) \odot (A \cdot x + b)) + b) = 2A \,diag(Ax+b)\,A$

### References