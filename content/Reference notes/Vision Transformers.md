### Key note
- Hỏi lại về cơ chế attention 
- P == Patch; Tóm lại nó giảm về 2 chiều đúng không

Should finetune in high resolution (Need to change embedding matrix for finetune with high-resolution image)

Pretraining data requirement: 
Data bé -> ViT bé tốt hơn


Inductive biases (Thiên kiến quy nạp) - Link 

Pixel này ko quan tâm xung quanh ?? 

-> xem lại multihead attention 

1D không tốt hơn 2D (Similar )

global average pooling (GAP)
### Exercise


### References

[https://colab.research.google.com/github/PytorchLightning/lightning-tutorials/blob/publication/.notebooks/course_UvA-DL/11-vision-transformer.ipynb](https://colab.research.google.com/github/PytorchLightning/lightning-tutorials/blob/publication/.notebooks/course_UvA-DL/11-vision-transformer.ipynb) - Train from scratch

[https://colab.research.google.com/github/NielsRogge/Transformers-Tutorials/blob/master/VisionTransformer/Fine_tuning_the_Vision_Transformer_on_CIFAR_10_with_the_%F0%9F%A4%97_Trainer.ipynb](https://colab.research.google.com/github/NielsRogge/Transformers-Tutorials/blob/master/VisionTransformer/Fine_tuning_the_Vision_Transformer_on_CIFAR_10_with_the_%F0%9F%A4%97_Trainer.ipynb) - Finetune 

#idea