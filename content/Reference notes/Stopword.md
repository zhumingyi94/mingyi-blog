**202408020949**
**Status: ** #flashcards 
**Tags: ** [[NLP]]

<hr style="border: none; height: 2px; background-color: #37FF1D; margin: 20px 0;">

# Stopword

<hr style="border: none; height: 2px; background-color: #37FF1D; margin: 20px 0;">

### Key note
**<font color="#00b050">Stop words</font>** are common words that appear frequently in text data but **<font color="#00b050">carry little meaning</font>**. When start text processing, we should **<font color="#00b050">remove stop words</font>**
Example: "the", "is", "and", "a", "of"
##### Code
You can remove stop words by using `nltk` library
```python
import nltk 

nltk.download('stopwords') 

from nltk.corpus import stopwords 

stop_words = set(stopwords.words('english'))

filtered_sentence = [w for w in wordDictA if not w in stop_words]
```
### Exercise
>[!question]- Implement remove stop words for Vietnamese

### References

