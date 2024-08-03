**202408030247**
**Status:** #flashcards #deeplearning #ComputerVision 
**Tags: ** 

<hr style="border: none; height: 2px; background-color: #37FF1D; margin: 20px 0;">

# Siamese network
<hr style="border: none; height: 2px; background-color: #37FF1D; margin: 20px 0;">

### Key note
##### <font color="#0070c0">Training Data</font>
![[Pasted image 20240803025324.png]]
##### <font color="#0070c0">Training process</font>
- Features extraction using CNN
![[Pasted image 20240803025425.png]]
- Make the network predict as near as 1 for similar training sample
![[Pasted image 20240803030336.png]]

>[!info]- **f** is the same CNN with exactly same hyperparameters 

>[!info] The training data for the Siamese network does not contains the n classes. 

Refer to [[Triplet Loss]] as the other way of training Siamese network
### Exercise
>[!question]- What is the overall architecture of Siamese network ?
?

>[!question]- How to formulate the training data for Siamese network
### References
[Few-Shot Learning (2/3): Siamese Networks (youtube.com)](https://www.youtube.com/watch?v=4S-XDefSjTM&t=0s)
