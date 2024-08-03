## OBJECTIVE
>[!question]- What is the commonest linguistics way of thinking of meaning
>A pairing between a word (signifiers - symbol) and signified (ideas or thing)
>= denotational semantics

>[!question]- How do we have usable meaning in computer 
>Common NLP solution: Use Wordnet, a thesaurus containing list of **synonym sets** and **hypernyms** ("is a" relationships)

>[!question]- Problems with resources like WordNet 
> Missing context, subjective, missing new meaning of words and CAN'T COMPUTE ACCURATE WORD similarly


In traditional NLP, we regard words as discrete symbols: hotel, conference, motel - a **localist** representation
This means each word can be represented by *one-hot* vectors
>[!question]- What is the problem with this ?
>There is no natural notion of similarity for one-hot vectors as each pairs of *one-hot* vectors are orthogonal 

>[!question]- Can we use WordNet's list to get similarity ?
>Yes, but it fail badly

=> We need to encode similarity of the vectors themselves

## METHOD

##### Representing words by their context
We use *Distributional semantics* - A word's meaning is given by the words that frequently appear close-by. 
This means that we will use contexts of $w$ to buiild up a representation of $w$
![[Pasted image 20240717015839.png | center]]

>[!info]- When you collect a bunch of words on words example of a word $w$ (token) we can treat $w$ as **type** 
> Refer [Stanford CS224N: NLP with Deep Learning | Winter 2021 | Lecture 1 - Intro & Word Vectors (youtube.com)](https://www.youtube.com/watch?v=rmVRLeJRkl4&list=PLoROMvodv4rMFqRtEuo6SGjY4XbRIVRd4&index=1) - 23:27

##### Word2Vec

**Ideas:**
- We have large corpus ("body") of text 
- Every word in a fixed vocabulary is represented by a **vector**
- Go through each position $t$ in the text, which has a center word $c$ and context ("outside") words $o$
- Use the **similarity of the word vectors** for $c$ and $o$ to calculate $p(o|c)$ or $p(c|o)$
- **Keep adjusting the word vectors** to maximize this probability

*Example windows and process for computing $P(w_{t+j} |w_{t})$*
![[Pasted image 20240717021105.png | center]]

**Objective function**
We construct this base on the statement "We want to maximize the probability of similarity word vectors
>[!question]- Construct the objective functions for Word2Vec from scratch
>Data *Likelihood* $= L(\theta) = \prod_{t=1}^T\prod_{-m \le j \le m \, j \neq 0}P(w_{t+j}|w_{t}; \theta)$
>The objective function can be constructed by maximizing this using [[Negative Log Likelihood]]
>$J(\theta)=-\frac{1}{T}\log L(\theta) = -\frac{1}{T}\sum_{t=1}^T\sum_{-m \le j \le m, j\neq 0}\log P(w_{t+j}|w_{t}, \theta)$
>Maximizing the probability mean minimizing the objective functions

>[!question]- Why the data likelihood is computed like that 
>
